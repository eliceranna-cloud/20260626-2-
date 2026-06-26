# -*- coding: utf-8 -*-
"""JYS Company landing page local server (Python)"""
import os, sys, json, threading, webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path

# Force UTF-8 stdout on Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

# --- 환경변수 로드 (.env) ---
ROOT = Path(__file__).parent
env_file = ROOT / '.env'
if env_file.exists():
    for line in env_file.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            k, v = line.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip())

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY', '')

# --- 지식 베이스 로드 ---
def load_knowledge():
    docs = []
    for md_path in sorted(ROOT.glob('uploads/*.md')):
        content = md_path.read_text(encoding='utf-8')
        docs.append(f'### [{md_path.name}]\n{content}')
    return '\n\n---\n\n'.join(docs) if docs else '(문서 없음)'

KNOWLEDGE = load_knowledge()

SYSTEM_PROMPT = f"""당신은 JYS 컴퍼니의 AI 상담 도우미 "JYS봇"입니다.

[지식 베이스]
아래 문서를 참고하여 답변하세요:

{KNOWLEDGE}

[답변 규칙 — 반드시 준수]
1. 자기소개·대화형 질문("이름이 뭐야", "뭐 할 수 있어" 등):
   "저는 JYS봇이에요 😊 JYS 컴퍼니의 AI 상담 도우미로, 마케팅·브랜딩 서비스에 대해 안내해 드립니다."처럼 자연스럽게 소개

2. 서비스·정책 질문:
   위 문서에 있는 내용만 사용하여 답변. 문서에 없는 내용은 "해당 내용은 문서에서 확인이 어렵네요. 더 정확한 안내는 무료 상담을 통해 도와드릴 수 있어요! 페이지 상단의 [무료 상담 신청] 버튼을 이용해 주세요 😊"로 안내

3. 서비스와 무관한 질문(날씨, 주식, 일상 등):
   "저는 JYS 컴퍼니 서비스 관련 질문만 답변 드릴 수 있어요 😊 마케팅이나 브랜딩에 대해 궁금한 점이 있으시면 편하게 질문해 주세요!"

4. 문서에 없는 수치·사실은 절대 창작하거나 추측하지 마세요.

[말투]
- 친근하고 전문적인 해요체 사용
- 답변은 간결하게 핵심만 (3~5문장 이내)"""

# --- MIME 타입 ---
MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
    '.md':   'text/markdown; charset=utf-8',
    '.json': 'application/json',
    '.woff2':'font/woff2',
    '.woff': 'font/woff',
}

class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f'  {self.address_string()} {fmt % args}')

    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', len(body))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        if self.path != '/api/chat':
            self.send_json(404, {'error': 'Not found'})
            return

        length = int(self.headers.get('Content-Length', 0))
        try:
            body = json.loads(self.rfile.read(length))
        except Exception:
            self.send_json(400, {'error': '잘못된 요청 형식입니다.'})
            return

        messages = body.get('messages', [])
        if not isinstance(messages, list):
            self.send_json(400, {'error': '잘못된 요청 형식입니다.'})
            return

        if not OPENAI_API_KEY:
            self.send_json(500, {'error': 'OPENAI_API_KEY가 .env에 설정되지 않았습니다.'})
            return

        try:
            from openai import OpenAI
            client = OpenAI(api_key=OPENAI_API_KEY)
            completion = client.chat.completions.create(
                model='gpt-5.4-mini',
                messages=[{'role': 'system', 'content': SYSTEM_PROMPT}] + messages[-10:],
                max_completion_tokens=600,
                temperature=0.5,
            )
            reply = completion.choices[0].message.content.strip()
            self.send_json(200, {'reply': reply})
        except Exception as e:
            print(f'  OpenAI error: {e}')
            self.send_json(500, {'error': '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'})

    def do_GET(self):
        path = self.path.split('?')[0]
        if path == '/':
            path = '/index.html'

        file_path = ROOT / path.lstrip('/')

        # 경로 순회 방지
        try:
            file_path.resolve().relative_to(ROOT.resolve())
        except ValueError:
            self.send_response(403)
            self.end_headers()
            return

        if not file_path.exists() or not file_path.is_file():
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Not Found')
            return

        data = file_path.read_bytes()
        ext = file_path.suffix.lower()
        content_type = MIME.get(ext, 'application/octet-stream')

        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', len(data))
        self.end_headers()
        self.wfile.write(data)


if __name__ == '__main__':
    PORT = 3000
    os.chdir(ROOT)

    if not OPENAI_API_KEY:
        print('[WARNING] OPENAI_API_KEY가 .env에 설정되지 않았습니다.')
        print('         .env 파일을 열고 OPENAI_API_KEY=sk-... 형태로 입력하세요.\n')
    else:
        print('[OK] OpenAI API 키: 설정됨')

    print(f'[OK] JYS 서버 실행 중: http://localhost:{PORT}')

    server = HTTPServer(('', PORT), Handler)

    # 1초 후 브라우저 자동 오픈
    threading.Timer(1.0, lambda: webbrowser.open(f'http://localhost:{PORT}')).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n서버 종료.')

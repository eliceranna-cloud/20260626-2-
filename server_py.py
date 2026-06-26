# -*- coding: utf-8 -*-
"""JYS Company landing page local server (Python)"""
import os, sys, json, threading, webbrowser
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
import urllib.request as ur
import urllib.error

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

def _clean(key):
    return (os.environ.get(key) or '').replace('\r', '').replace('\n', '').strip()

OPENAI_API_KEY = _clean('OPENAI_API_KEY')
SUPA_URL       = _clean('SUPABASE_URL').rstrip('/')
SUPA_KEY       = _clean('SUPABASE_SERVICE_ROLE_KEY')

# --- 지식 베이스 로드 (폴백용 전체 문서) ---
def load_knowledge():
    docs = []
    for md_path in sorted(ROOT.glob('uploads/*.md')):
        content = md_path.read_text(encoding='utf-8')
        docs.append(f'### [{md_path.name}]\n{content}')
    return '\n\n---\n\n'.join(docs) if docs else '(문서 없음)'

KNOWLEDGE_FALLBACK = load_knowledge()

SYSTEM_PROMPT_TPL = """당신은 JYS 컴퍼니의 AI 상담 도우미 "JYS봇"입니다.

[지식 베이스]
아래 문서를 참고하여 답변하세요:

{knowledge}

[답변 규칙 — 반드시 준수]
1. 자기소개·대화형 질문("이름이 뭐야", "뭐 할 수 있어" 등):
   "저는 JYS봇이에요 JYS 컴퍼니의 AI 상담 도우미로, 마케팅·브랜딩 서비스에 대해 안내해 드립니다."처럼 자연스럽게 소개

2. 서비스·정책 질문:
   위 문서에 있는 내용만 사용하여 답변. 문서에 없는 내용은 "해당 내용은 문서에서 확인이 어렵네요. 더 정확한 안내는 무료 상담을 통해 도와드릴 수 있어요! 페이지 상단의 [무료 상담 신청] 버튼을 이용해 주세요"로 안내

3. 서비스와 무관한 질문(날씨, 주식, 일상 등):
   "저는 JYS 컴퍼니 서비스 관련 질문만 답변 드릴 수 있어요 마케팅이나 브랜딩에 대해 궁금한 점이 있으시면 편하게 질문해 주세요!"

4. 문서에 없는 수치·사실은 절대 창작하거나 추측하지 마세요.

[말투]
- 친근하고 전문적인 해요체 사용
- 답변은 간결하게 핵심만 (3~5문장 이내)"""

# --- Supabase HTTP 헬퍼 ---
def _supa_headers(prefer=None):
    h = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + SUPA_KEY,
        'apikey': SUPA_KEY,
    }
    if prefer:
        h['Prefer'] = prefer
    return h

def supa_post(path, body_dict, prefer=None):
    data = json.dumps(body_dict, ensure_ascii=False).encode('utf-8')
    req = ur.Request(SUPA_URL + path, data=data, headers=_supa_headers(prefer))
    with ur.urlopen(req, timeout=8) as r:
        raw = r.read().decode('utf-8')
        return r.status, json.loads(raw) if raw.strip() else {}

def supa_insert(path, body_dict):
    try:
        data = json.dumps(body_dict, ensure_ascii=False).encode('utf-8')
        req = ur.Request(SUPA_URL + path, data=data, headers=_supa_headers('return=minimal'))
        with ur.urlopen(req, timeout=5):
            pass
    except Exception as e:
        print(f'  Supabase insert error: {e}')

# --- RAG ---
def get_embedding(text):
    from openai import OpenAI
    client = OpenAI(api_key=OPENAI_API_KEY)
    resp = client.embeddings.create(model='text-embedding-3-small', input=text)
    return resp.data[0].embedding

def get_rag_context(question):
    if not SUPA_URL or not SUPA_KEY:
        return None
    try:
        embedding = get_embedding(question)
        status, matches = supa_post('/rest/v1/rpc/match_documents', {
            'query_embedding': embedding,
            'match_count': 5,
            'match_threshold': 0.3,
        })
        if status == 200 and isinstance(matches, list) and matches:
            return '\n\n---\n\n'.join(
                f'### [{m["source"]}]\n{m["content"]}' for m in matches
            )
    except Exception as e:
        print(f'  RAG error (fallback): {e}')
    return None

def log_chat(session_id, role, content):
    if not SUPA_URL or not SUPA_KEY or not session_id:
        return
    threading.Thread(
        target=supa_insert,
        args=('/rest/v1/chat_logs', {'session_id': session_id, 'role': role, 'content': content}),
        daemon=True,
    ).start()

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

    def _read_json(self):
        length = int(self.headers.get('Content-Length', 0))
        try:
            return json.loads(self.rfile.read(length))
        except Exception:
            return None

    def do_POST(self):
        if self.path == '/api/chat':
            self._handle_chat()
        elif self.path == '/api/lead':
            self._handle_lead()
        else:
            self.send_json(404, {'error': 'Not found'})

    def _handle_chat(self):
        body = self._read_json()
        if not body or not isinstance(body.get('messages'), list):
            self.send_json(400, {'error': '잘못된 요청 형식입니다.'})
            return

        if not OPENAI_API_KEY:
            self.send_json(500, {'error': 'OPENAI_API_KEY가 .env에 설정되지 않았습니다.'})
            return

        messages   = body['messages']
        session_id = body.get('sessionId')
        user_msgs  = [m for m in messages if m.get('role') == 'user']
        latest_q   = user_msgs[-1]['content'] if user_msgs else ''

        knowledge = get_rag_context(latest_q) if latest_q else None
        if not knowledge:
            knowledge = KNOWLEDGE_FALLBACK

        system_prompt = SYSTEM_PROMPT_TPL.format(knowledge=knowledge)

        try:
            from openai import OpenAI
            client = OpenAI(api_key=OPENAI_API_KEY)
            completion = client.chat.completions.create(
                model='gpt-5.4-mini',
                messages=[{'role': 'system', 'content': system_prompt}] + messages[-10:],
                max_completion_tokens=600,
                temperature=0.5,
            )
            reply = completion.choices[0].message.content.strip()

            if session_id and latest_q:
                log_chat(session_id, 'user', latest_q)
                log_chat(session_id, 'assistant', reply)

            self.send_json(200, {'reply': reply})
        except Exception as e:
            print(f'  OpenAI error: {e}')
            self.send_json(500, {'error': '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'})

    def _handle_lead(self):
        body = self._read_json()
        if not body:
            self.send_json(400, {'error': '잘못된 요청 형식입니다.'})
            return

        name  = (body.get('name') or '').strip()
        phone = (body.get('phone') or '').strip()

        if not name or not phone:
            self.send_json(400, {'error': '이름과 연락처는 필수입니다.'})
            return

        if SUPA_URL and SUPA_KEY:
            supa_insert('/rest/v1/leads', {
                'name': name, 'phone': phone,
                'package': body.get('package') or None,
                'message': body.get('message') or None,
            })
        else:
            print(f'  [lead] {json.dumps({"name": name, "phone": phone}, ensure_ascii=False)}')

        self.send_json(200, {'ok': True})

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
    else:
        print('[OK] OpenAI API 키: 설정됨')

    if SUPA_URL and SUPA_KEY:
        print('[OK] Supabase: 설정됨')
    else:
        print('[INFO] Supabase: 미설정 (RAG/로그 비활성화, 폴백 모드)')

    print(f'[OK] JYS 서버 실행 중: http://localhost:{PORT}')

    server = HTTPServer(('', PORT), Handler)

    # 1초 후 브라우저 자동 오픈
    threading.Timer(1.0, lambda: webbrowser.open(f'http://localhost:{PORT}')).start()

    server.serve_forever()

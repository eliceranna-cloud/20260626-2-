# -*- coding: utf-8 -*-
"""
JYS 컴퍼니 챗봇 문서 임베딩 시더
uploads/*.md → 청크 → OpenAI 임베딩 → Supabase documents 테이블

실행:
  python scripts/seed.py
"""
import os, sys, json, time
from pathlib import Path
import urllib.request as ur
import urllib.error

# ── .env 로드 ────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
env_path = ROOT / '.env'
if env_path.exists():
    for raw in env_path.read_text(encoding='utf-8').splitlines():
        raw = raw.strip()
        if raw and not raw.startswith('#') and '=' in raw:
            k, v = raw.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip())

def clean(v):
    return (os.environ.get(v) or '').replace('\r','').replace('\n','').strip()

OPENAI_KEY = clean('OPENAI_API_KEY')
SUPA_URL   = clean('SUPABASE_URL').rstrip('/')
SUPA_KEY   = clean('SUPABASE_SERVICE_ROLE_KEY')

if not OPENAI_KEY:
    sys.exit('[ERROR] OPENAI_API_KEY가 .env에 없습니다.')
if not SUPA_URL or not SUPA_KEY:
    sys.exit('[ERROR] SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY가 .env에 없습니다.')

CHUNK_SIZE    = 450   # 목표 청크 크기 (characters)
CHUNK_OVERLAP = 60    # 청크 간 겹치는 문자 수

# ── 청킹 ────────────────────────────────────────────────────
def chunk_text(text):
    paras = [p.strip() for p in text.split('\n\n') if p.strip()]
    chunks, cur = [], ''
    for para in paras:
        if cur and len(cur) + len(para) + 2 > CHUNK_SIZE:
            chunks.append(cur.strip())
            cur = cur[-CHUNK_OVERLAP:] + '\n\n' + para
        else:
            cur = (cur + '\n\n' + para).strip() if cur else para
    if cur.strip():
        chunks.append(cur.strip())
    return [c for c in chunks if len(c) > 30]

# ── HTTP 헬퍼 ────────────────────────────────────────────────
def post_json(url, headers, body, timeout=30):
    data = json.dumps(body, ensure_ascii=False).encode('utf-8')
    req = ur.Request(url, data=data,
        headers={'Content-Type': 'application/json', **headers})
    try:
        with ur.urlopen(req, timeout=timeout) as r:
            return r.status, json.loads(r.read().decode('utf-8'))
    except ur.HTTPError as e:
        return e.code, e.read().decode('utf-8')

def delete_json(url, headers, timeout=10):
    req = ur.Request(url, method='DELETE', headers=headers)
    try:
        with ur.urlopen(req, timeout=timeout) as r:
            return r.status
    except ur.HTTPError as e:
        return e.code

# ── OpenAI 임베딩 ────────────────────────────────────────────
def embed(text):
    status, body = post_json(
        'https://api.openai.com/v1/embeddings',
        {'Authorization': 'Bearer ' + OPENAI_KEY},
        {'model': 'text-embedding-3-small', 'input': text}
    )
    if status != 200:
        raise RuntimeError(f'Embedding failed {status}: {body}')
    return body['data'][0]['embedding']

# ── Supabase 헬퍼 ────────────────────────────────────────────
SUPA_HEADERS = {
    'Authorization': 'Bearer ' + SUPA_KEY,
    'apikey': SUPA_KEY,
    'Prefer': 'return=minimal',
}

def delete_source(source):
    from urllib.parse import quote
    delete_json(f'{SUPA_URL}/rest/v1/documents?source=eq.{quote(source)}', SUPA_HEADERS)

def insert_document(source, chunk_index, content, embedding):
    status, body = post_json(
        f'{SUPA_URL}/rest/v1/documents',
        SUPA_HEADERS,
        {'source': source, 'chunk_index': chunk_index,
         'content': content, 'embedding': embedding},
        timeout=15
    )
    if status not in (200, 201):
        print(f'    [WARN] Insert failed {status}: {str(body)[:80]}')

# ── 메인 ────────────────────────────────────────────────────
def main():
    uploads = ROOT / 'uploads'
    md_files = sorted(uploads.glob('*.md'))
    if not md_files:
        print('uploads/ 에 .md 파일이 없습니다.')
        return

    print(f'{len(md_files)}개 파일 처리 시작\n')

    for md_path in md_files:
        source  = md_path.name
        content = md_path.read_text(encoding='utf-8')
        chunks  = chunk_text(content)
        print(f'[{source}]  {len(chunks)}개 청크')

        delete_source(source)          # 기존 데이터 삭제

        for i, chunk in enumerate(chunks):
            print(f'  {i+1}/{len(chunks)} ({len(chunk)}자)...', end=' ', flush=True)
            try:
                vec = embed(chunk)
                insert_document(source, i, chunk, vec)
                print('OK')
            except Exception as e:
                print(f'FAILED: {e}')
            time.sleep(0.1)            # rate limit 방지

    print('\n시딩 완료!')

if __name__ == '__main__':
    main()

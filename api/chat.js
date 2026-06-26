const fs = require('fs');
const path = require('path');
const https = require('https');

// ── Fallback: load full .md files ────────────────────────────
function loadKnowledgeBase() {
  try {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    const files = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.md'));
    if (!files.length) return '(지식 베이스 문서 없음)';
    return files.map(f => {
      const content = fs.readFileSync(path.join(uploadsDir, f), 'utf-8');
      return `### [${f}]\n${content}`;
    }).join('\n\n---\n\n');
  } catch (e) {
    console.error('Knowledge base load error:', e.message);
    return '(지식 베이스 로드 실패)';
  }
}

const FALLBACK_KNOWLEDGE = loadKnowledgeBase();

function buildSystemPrompt(knowledge) {
  return `당신은 JYS 컴퍼니의 AI 상담 도우미 "JYS봇"입니다.

[지식 베이스]
아래 문서를 참고하여 답변하세요:

${knowledge}

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
- 답변은 간결하게 핵심만 (3~5문장 이내)`;
}

// ── OpenAI: chat completions ─────────────────────────────────
function callOpenAI(apiKey, messages) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'gpt-5.4-mini',
      messages,
      max_completion_tokens: 600,
      temperature: 0.5,
    });
    const opts = {
      hostname: 'api.openai.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => { d += c; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(d);
          if (res.statusCode === 200) {
            resolve(parsed.choices?.[0]?.message?.content?.trim() || '죄송합니다, 잠시 후 다시 시도해 주세요.');
          } else {
            const err = new Error(parsed.error?.message || 'API error');
            err.status = res.statusCode;
            reject(err);
          }
        } catch (e) {
          reject(new Error('JSON 파싱 오류: ' + d.slice(0, 100)));
        }
      });
    });
    req.setTimeout(25000, () => { req.destroy(); reject(new Error('요청 시간이 초과됐습니다 (25s).')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── OpenAI: embeddings ───────────────────────────────────────
function callOpenAIEmbedding(apiKey, text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ model: 'text-embedding-3-small', input: text });
    const opts = {
      hostname: 'api.openai.com',
      path: '/v1/embeddings',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => { d += c; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(d);
          if (res.statusCode === 200) resolve(parsed.data[0].embedding);
          else reject(new Error('Embedding error ' + res.statusCode));
        } catch (e) {
          reject(new Error('Embedding JSON parse error'));
        }
      });
    });
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('embedding timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Supabase: RPC call ───────────────────────────────────────
function supabaseRPC(supaUrl, supaKey, fn, params) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(params);
    const urlObj = new URL(supaUrl);
    const opts = {
      hostname: urlObj.hostname,
      path: '/rest/v1/rpc/' + fn,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + supaKey,
        'apikey': supaKey,
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => { d += c; });
      res.on('end', () => {
        try {
          if (res.statusCode === 200) resolve(JSON.parse(d));
          else reject(new Error('Supabase RPC ' + res.statusCode + ': ' + d.slice(0, 100)));
        } catch (e) {
          reject(new Error('Supabase RPC parse error'));
        }
      });
    });
    req.setTimeout(8000, () => { req.destroy(); reject(new Error('supabase rpc timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Supabase: insert row (fire-and-forget safe) ───────────────
function supabaseInsert(supaUrl, supaKey, table, row) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(row);
    const urlObj = new URL(supaUrl);
    const opts = {
      hostname: urlObj.hostname,
      path: '/rest/v1/' + table,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + supaKey,
        'apikey': supaKey,
        'Prefer': 'return=minimal',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(opts, res => {
      res.resume();
      resolve(res.statusCode);
    });
    req.setTimeout(5000, () => { req.destroy(); reject(new Error('insert timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── RAG: embed question → top-5 chunks ───────────────────────
async function getRAGContext(apiKey, supaUrl, supaKey, question) {
  try {
    const embedding = await callOpenAIEmbedding(apiKey, question);
    const matches = await supabaseRPC(supaUrl, supaKey, 'match_documents', {
      query_embedding: embedding,
      match_count: 5,
      match_threshold: 0.3,
    });
    if (!Array.isArray(matches) || !matches.length) return null;
    return matches.map(m => `### [${m.source}]\n${m.content}`).join('\n\n---\n\n');
  } catch (e) {
    console.error('RAG error (falling back to full KB):', e.message);
    return null;
  }
}

// ── Chat log: best-effort, no impact on response ─────────────
function logChatMessage(supaUrl, supaKey, sessionId, role, content) {
  supabaseInsert(supaUrl, supaKey, 'chat_logs', { session_id: sessionId, role, content })
    .catch(e => console.error('Chat log error:', e.message));
}

// ── Handler ──────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body;
  if (!body || !Array.isArray(body.messages)) {
    return res.status(400).json({ error: '잘못된 요청 형식입니다.' });
  }

  const apiKey = (process.env.OPENAI_API_KEY || '').replace(/\s+/g, '');
  if (!apiKey) {
    return res.status(500).json({
      error: 'API 키가 설정되지 않았습니다. Vercel 대시보드 → Settings → Environment Variables에서 OPENAI_API_KEY를 추가해 주세요.',
    });
  }

  const supaUrl = (process.env.SUPABASE_URL || '').replace(/\s+/g, '');
  const supaKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').replace(/\s+/g, '');
  const sessionId = body.sessionId || null;

  const userMsgs = body.messages.filter(m => m.role === 'user');
  const latestQuestion = userMsgs.length ? userMsgs[userMsgs.length - 1].content : '';

  // Try RAG; fall back to full knowledge base if Supabase not configured or search fails
  let knowledge = FALLBACK_KNOWLEDGE;
  if (supaUrl && supaKey && latestQuestion) {
    const ragContext = await getRAGContext(apiKey, supaUrl, supaKey, latestQuestion);
    if (ragContext) knowledge = ragContext;
  }

  const messages = [
    { role: 'system', content: buildSystemPrompt(knowledge) },
    ...body.messages.slice(-10),
  ];

  try {
    const reply = await callOpenAI(apiKey, messages);

    // Best-effort chat logging
    if (supaUrl && supaKey && sessionId && latestQuestion) {
      logChatMessage(supaUrl, supaKey, sessionId, 'user', latestQuestion);
      logChatMessage(supaUrl, supaKey, sessionId, 'assistant', reply);
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI call failed:', err.status, err.message);
    if (err.status === 401) return res.status(500).json({ error: 'API 키가 유효하지 않습니다.' });
    if (err.status === 404) return res.status(500).json({ error: '모델을 찾을 수 없습니다: ' + err.message });
    if (err.status === 429) return res.status(500).json({ error: '요청 한도 초과입니다. 잠시 후 다시 시도해 주세요.' });
    return res.status(500).json({ error: err.message || '알 수 없는 오류' });
  }
};

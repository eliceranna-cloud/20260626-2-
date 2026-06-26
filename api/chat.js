const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

// Knowledge base: read all .md files from uploads/ at cold start
function loadKnowledgeBase() {
  try {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    const files = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.md'));
    if (!files.length) return '(지식 베이스 문서 없음)';
    return files
      .map(f => {
        const content = fs.readFileSync(path.join(uploadsDir, f), 'utf-8');
        return `### [${f}]\n${content}`;
      })
      .join('\n\n---\n\n');
  } catch (e) {
    console.error('Knowledge base load error:', e.message);
    return '(지식 베이스 로드 실패)';
  }
}

const knowledgeBase = loadKnowledgeBase();

const SYSTEM_PROMPT = `당신은 JYS 컴퍼니의 AI 상담 도우미 "JYS봇"입니다.

[지식 베이스]
아래 문서를 참고하여 답변하세요:

${knowledgeBase}

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

module.exports = async function handler(req, res) {
  // CORS headers (same-origin on production, useful for local dev)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead ? res.writeHead(204) : res.status(204);
    return res.end ? res.end() : res.send('');
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  const body = req.body;
  if (!body || !Array.isArray(body.messages)) {
    return sendJson(res, 400, { error: '잘못된 요청 형식입니다.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set');
    return sendJson(res, 500, { error: 'API 키가 설정되지 않았습니다.' });
  }

  const client = new OpenAI({ apiKey });

  // Keep last 10 messages (5 turns) for context
  const recentMessages = body.messages.slice(-10);

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      max_completion_tokens: 600,
      temperature: 0.5,
    });

    const reply = completion.choices[0]?.message?.content?.trim()
      || '죄송합니다, 잠시 후 다시 시도해 주세요.';

    return sendJson(res, 200, { reply });
  } catch (err) {
    console.error('OpenAI API error:', err.message);
    const msg = err.status === 401
      ? 'API 키가 유효하지 않습니다.'
      : '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
    return sendJson(res, 500, { error: msg });
  }
};

function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  if (typeof res.status === 'function') {
    // Express/Vercel style
    res.status(status).json(data);
  } else {
    // Node.js http.ServerResponse style
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(body);
  }
}

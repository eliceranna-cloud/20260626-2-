const fs = require('fs');
const path = require('path');

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body;
  if (!body || !Array.isArray(body.messages)) {
    return res.status(400).json({ error: '잘못된 요청 형식입니다.' });
  }

  const apiKey = (process.env.OPENAI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({
      error: 'API 키가 설정되지 않았습니다. Vercel 대시보드 → Settings → Environment Variables에서 OPENAI_API_KEY를 추가해 주세요.',
    });
  }

  // Lazy require to surface import errors clearly
  let OpenAI;
  try {
    OpenAI = require('openai');
  } catch (e) {
    console.error('openai package load failed:', e.message);
    return res.status(500).json({ error: 'openai 패키지 로드 실패: ' + e.message });
  }

  const client = new OpenAI({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...body.messages.slice(-10),
      ],
      max_completion_tokens: 600,
      temperature: 0.5,
    });

    const reply = completion.choices[0]?.message?.content?.trim()
      || '죄송합니다, 잠시 후 다시 시도해 주세요.';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err.status, err.message);
    if (err.status === 401) {
      return res.status(500).json({ error: 'API 키가 유효하지 않습니다. Vercel 환경변수를 확인해 주세요.' });
    }
    if (err.status === 404) {
      return res.status(500).json({ error: '모델을 찾을 수 없습니다: ' + err.message });
    }
    if (err.status === 429) {
      return res.status(500).json({ error: 'API 요청 한도 초과입니다. 잠시 후 다시 시도해 주세요.' });
    }
    return res.status(500).json({ error: '오류: ' + (err.message || '알 수 없는 오류') });
  }
};

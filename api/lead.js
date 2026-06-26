const https = require('https');

function supaPost(supaUrl, supaKey, path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const urlObj = new URL(supaUrl);
    const opts = {
      hostname: urlObj.hostname,
      path: '/rest/v1/' + path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + supaKey,
        'apikey': supaKey,
        'Prefer': 'return=minimal',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => { d += c; });
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body || {};
  const { name, phone } = body;

  if (!name || !phone) {
    return res.status(400).json({ error: '이름과 연락처는 필수입니다.' });
  }

  const supaUrl = (process.env.SUPABASE_URL || '').replace(/\s+/g, '');
  const supaKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').replace(/\s+/g, '');

  if (!supaUrl || !supaKey) {
    // Supabase 미설정 시 콘솔에만 기록하고 성공 반환 (graceful degradation)
    console.log('[lead]', JSON.stringify({ name, phone, package: body.package, message: body.message }));
    return res.status(200).json({ ok: true });
  }

  try {
    const result = await supaPost(supaUrl, supaKey, 'leads', {
      name,
      phone,
      package: body.package || null,
      message: body.message || null,
    });

    if (result.status >= 400) {
      console.error('Lead insert failed:', result.status, result.body);
    }
  } catch (e) {
    console.error('Lead save error:', e.message);
  }

  // 저장 실패해도 사용자에게는 성공 응답 (UX 우선)
  return res.status(200).json({ ok: true });
};

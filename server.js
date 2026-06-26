require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const chatHandler = require('./api/chat');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
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
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // ---- /api/chat ----
  if (pathname === '/api/chat') {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      return res.end();
    }
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

    let raw = '';
    req.on('data', chunk => { raw += chunk.toString(); });
    req.on('end', async () => {
      try {
        req.body = JSON.parse(raw);
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
      await chatHandler(req, res);
    });
    return;
  }

  // ---- Static files ----
  let filePath = pathname === '/' ? '/index.html' : pathname;
  const fullPath = path.resolve(ROOT, '.' + filePath);

  // Prevent path traversal
  if (!fullPath.startsWith(ROOT + path.sep) && fullPath !== ROOT) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found');
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅  JYS 컴퍼니 서버 실행 중: http://localhost:${PORT}`);
  console.log(`    OpenAI API 키: ${process.env.OPENAI_API_KEY ? '설정됨' : '⚠️  미설정 (.env 파일 확인)'}`);
});

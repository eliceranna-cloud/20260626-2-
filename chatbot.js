(function () {
  'use strict';

  var API_URL = '/api/chat';
  var MAX_HISTORY = 10;
  var WELCOME = '안녕하세요! 👋\n저는 JYS봇이에요. JYS 컴퍼니의 마케팅·브랜딩 서비스에 대해 궁금한 점이 있으시면 편하게 질문해 주세요 😊';

  var history = [];
  var isOpen = false;
  var isLoading = false;

  var $msgs, $input, $sendBtn, $loadingDots, $toggle, $window;

  /* ─────────── CSS ─────────── */
  function injectStyles() {
    if (document.getElementById('jys-bot-css')) return;
    var s = document.createElement('style');
    s.id = 'jys-bot-css';
    s.textContent = '\n'
      + '/* ── Toggle Button ── */\n'
      + '#jys-toggle{'
      +   'position:fixed;bottom:28px;right:28px;z-index:9998;'
      +   'width:60px;height:60px;border-radius:50%;'
      +   'background:#F26C1D;border:none;cursor:pointer;'
      +   'box-shadow:0 4px 22px rgba(242,108,29,.45);'
      +   'display:flex;align-items:center;justify-content:center;'
      +   'transition:transform .2s,box-shadow .2s;'
      +   'outline:none;'
      + '}'
      + '#jys-toggle:hover{transform:scale(1.08);box-shadow:0 6px 30px rgba(242,108,29,.55);}'
      + '#jys-toggle svg{display:block;}'

      + '/* ── Chat Window ── */\n'
      + '#jys-window{'
      +   'position:fixed;bottom:104px;right:28px;z-index:9999;'
      +   'width:min(380px,calc(100vw - 40px));height:520px;'
      +   'background:#fff;border-radius:20px;'
      +   'box-shadow:0 10px 50px rgba(0,0,0,.18);'
      +   'display:flex;flex-direction:column;overflow:hidden;'
      +   'font-family:Pretendard,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;'
      +   'transform:translateY(24px) scale(.97);opacity:0;pointer-events:none;'
      +   'transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .22s ease;'
      + '}'
      + '#jys-window.open{transform:translateY(0) scale(1);opacity:1;pointer-events:auto;}'

      + '/* ── Header ── */\n'
      + '#jys-header{'
      +   'background:#1A3C6E;color:#fff;padding:14px 16px;'
      +   'display:flex;align-items:center;gap:10px;flex-shrink:0;'
      + '}'
      + '#jys-avatar{'
      +   'width:38px;height:38px;border-radius:50%;background:#F26C1D;'
      +   'display:flex;align-items:center;justify-content:center;'
      +   'font-size:19px;flex-shrink:0;'
      + '}'
      + '#jys-title-wrap{flex:1;}'
      + '#jys-title-wrap b{display:block;font-size:14px;font-weight:700;letter-spacing:-.01em;}'
      + '#jys-title-wrap span{font-size:11px;opacity:.68;}'
      + '#jys-close{'
      +   'background:none;border:none;color:#fff;opacity:.65;'
      +   'cursor:pointer;padding:4px 6px;border-radius:6px;'
      +   'font-size:21px;line-height:1;transition:opacity .15s;'
      + '}'
      + '#jys-close:hover{opacity:1;}'

      + '/* ── Messages ── */\n'
      + '#jys-msgs{'
      +   'flex:1;overflow-y:auto;padding:14px 14px 8px;'
      +   'display:flex;flex-direction:column;gap:10px;'
      +   'background:#f7f8fb;'
      +   'scroll-behavior:smooth;'
      + '}'
      + '#jys-msgs::-webkit-scrollbar{width:3px;}'
      + '#jys-msgs::-webkit-scrollbar-thumb{background:#ddd;border-radius:2px;}'

      + '.jm{display:flex;gap:7px;align-items:flex-end;max-width:90%;}'
      + '.jm.user{align-self:flex-end;flex-direction:row-reverse;}'
      + '.jm.bot{align-self:flex-start;}'
      + '.jm-icon{width:26px;height:26px;border-radius:50%;background:#F26C1D;'
      +   'flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;}'
      + '.jm-bubble{'
      +   'padding:9px 13px;border-radius:16px;font-size:13.5px;'
      +   'line-height:1.62;word-break:break-word;white-space:pre-wrap;'
      + '}'
      + '.jm.user .jm-bubble{'
      +   'background:#F26C1D;color:#fff;border-bottom-right-radius:4px;'
      + '}'
      + '.jm.bot .jm-bubble{'
      +   'background:#fff;color:#222;border-bottom-left-radius:4px;'
      +   'box-shadow:0 1px 5px rgba(0,0,0,.08);'
      + '}'

      + '/* ── Loading dots ── */\n'
      + '#jys-loading{display:none;align-self:flex-start;gap:7px;align-items:flex-end;}'
      + '#jys-loading.show{display:flex;}'
      + '.jdots{'
      +   'background:#fff;border-radius:16px;border-bottom-left-radius:4px;'
      +   'box-shadow:0 1px 5px rgba(0,0,0,.08);'
      +   'padding:12px 14px;display:flex;gap:5px;align-items:center;'
      + '}'
      + '.jdot{'
      +   'width:7px;height:7px;border-radius:50%;background:#ccc;'
      +   'animation:jdot-anim 1.3s infinite ease-in-out;'
      + '}'
      + '.jdot:nth-child(2){animation-delay:.2s;}'
      + '.jdot:nth-child(3){animation-delay:.4s;}'
      + '@keyframes jdot-anim{'
      +   '0%,80%,100%{transform:scale(.65);opacity:.45;}'
      +   '40%{transform:scale(1);opacity:1;}'
      + '}'

      + '/* ── Input area ── */\n'
      + '#jys-foot{'
      +   'display:flex;gap:8px;padding:10px 12px;'
      +   'border-top:1px solid #eef0f3;background:#fff;flex-shrink:0;'
      +   'align-items:flex-end;'
      + '}'
      + '#jys-input{'
      +   'flex:1;border:1.5px solid #e2e5eb;border-radius:12px;'
      +   'padding:9px 13px;font-size:13.5px;font-family:inherit;'
      +   'color:#333;resize:none;outline:none;line-height:1.45;'
      +   'max-height:100px;overflow-y:auto;'
      +   'transition:border-color .15s;'
      +   'background:#fafbfc;'
      + '}'
      + '#jys-input:focus{border-color:#F26C1D;background:#fff;}'
      + '#jys-input::placeholder{color:#aaa;}'
      + '#jys-send{'
      +   'width:40px;height:40px;border-radius:12px;'
      +   'background:#F26C1D;border:none;cursor:pointer;flex-shrink:0;'
      +   'display:flex;align-items:center;justify-content:center;'
      +   'transition:background .15s;'
      + '}'
      + '#jys-send:hover{background:#d95c0d;}'
      + '#jys-send:disabled{background:#ffd4b3;cursor:not-allowed;}'
      + '#jys-send svg{display:block;}'

      + '/* ── Mobile ── */\n'
      + '@media(max-width:480px){'
      +   '#jys-window{bottom:88px;right:16px;height:480px;}'
      +   '#jys-toggle{bottom:18px;right:18px;width:54px;height:54px;}'
      + '}'
      + '\n';
    document.head.appendChild(s);
  }

  /* ─────────── DOM ─────────── */
  var ICON_CHAT = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z" fill="white"/></svg>';
  var ICON_CLOSE_BTN = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="white"/></svg>';
  var ICON_SEND = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white"/></svg>';

  function buildUI() {
    // Toggle button
    $toggle = document.createElement('button');
    $toggle.id = 'jys-toggle';
    $toggle.setAttribute('aria-label', '채팅 상담 열기');
    $toggle.innerHTML = ICON_CHAT;
    $toggle.addEventListener('click', toggleChat);
    document.body.appendChild($toggle);

    // Chat window
    $window = document.createElement('div');
    $window.id = 'jys-window';
    $window.setAttribute('role', 'dialog');
    $window.setAttribute('aria-modal', 'true');
    $window.setAttribute('aria-label', 'JYS봇 채팅 상담');
    $window.innerHTML = ''
      + '<div id="jys-header">'
      +   '<div id="jys-avatar">🤖</div>'
      +   '<div id="jys-title-wrap">'
      +     '<b>JYS봇</b>'
      +     '<span>● JYS 컴퍼니 AI 상담</span>'
      +   '</div>'
      +   '<button id="jys-close" aria-label="닫기">×</button>'
      + '</div>'
      + '<div id="jys-msgs" role="log" aria-live="polite">'
      +   '<div id="jys-loading">'
      +     '<div class="jm-icon">🤖</div>'
      +     '<div class="jdots">'
      +       '<div class="jdot"></div><div class="jdot"></div><div class="jdot"></div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + '<div id="jys-foot">'
      +   '<input id="jys-input" type="text" placeholder="궁금한 점을 입력해 주세요..." maxlength="500" />'
      +   '<button id="jys-send" aria-label="전송">' + ICON_SEND + '</button>'
      + '</div>';
    document.body.appendChild($window);

    $msgs    = document.getElementById('jys-msgs');
    $input   = document.getElementById('jys-input');
    $sendBtn = document.getElementById('jys-send');
    $loadingDots = document.getElementById('jys-loading');

    document.getElementById('jys-close').addEventListener('click', closeChat);
    $sendBtn.addEventListener('click', sendMessage);
    $input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
  }

  /* ─────────── Open / Close ─────────── */
  function openChat() {
    isOpen = true;
    $window.classList.add('open');
    $toggle.innerHTML = ICON_CLOSE_BTN;
    $toggle.setAttribute('aria-label', '채팅창 닫기');
    setTimeout(function () { if ($input) $input.focus(); }, 280);
  }

  function closeChat() {
    isOpen = false;
    $window.classList.remove('open');
    $toggle.innerHTML = ICON_CHAT;
    $toggle.setAttribute('aria-label', '채팅 상담 열기');
  }

  function toggleChat() {
    if (isOpen) closeChat(); else openChat();
  }

  /* ─────────── Messages ─────────── */
  function appendMsg(role, text) {
    var div = document.createElement('div');
    div.className = 'jm ' + (role === 'user' ? 'user' : 'bot');

    var html = '';
    if (role !== 'user') html += '<div class="jm-icon">🤖</div>';
    html += '<div class="jm-bubble">' + escHtml(text) + '</div>';
    div.innerHTML = html;

    $msgs.insertBefore(div, $loadingDots);
    scrollBottom();
  }

  function showLoading() {
    isLoading = true;
    $loadingDots.classList.add('show');
    $sendBtn.disabled = true;
    $input.disabled = true;
    scrollBottom();
  }

  function hideLoading() {
    isLoading = false;
    $loadingDots.classList.remove('show');
    $sendBtn.disabled = false;
    $input.disabled = false;
    $input.focus();
  }

  function scrollBottom() {
    $msgs.scrollTop = $msgs.scrollHeight;
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ─────────── Send ─────────── */
  function sendMessage() {
    var text = $input.value.trim();
    if (!text || isLoading) return;

    $input.value = '';
    appendMsg('user', text);

    history.push({ role: 'user', content: text });
    trimHistory();
    showLoading();

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (r) {
        if (!r.ok) return r.json().then(function (d) { throw new Error(d.error || '서버 오류'); });
        return r.json();
      })
      .then(function (data) {
        hideLoading();
        var reply = data.reply || '죄송합니다, 잠시 후 다시 시도해 주세요.';
        appendMsg('assistant', reply);
        history.push({ role: 'assistant', content: reply });
        trimHistory();
      })
      .catch(function (err) {
        hideLoading();
        appendMsg('assistant', '⚠️ ' + (err.message || '연결에 문제가 생겼어요. 잠시 후 다시 시도해 주세요.'));
      });
  }

  function trimHistory() {
    if (history.length > MAX_HISTORY) history = history.slice(-MAX_HISTORY);
  }

  /* ─────────── Init ─────────── */
  function init() {
    injectStyles();
    buildUI();
    // Auto-open with welcome message 1 second after page load
    setTimeout(function () {
      openChat();
      appendMsg('assistant', WELCOME);
      history.push({ role: 'assistant', content: WELCOME });
    }, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }
}());

/**
 * Smoke test: POST /.netlify/functions/chat-completions
 *
 * Local (with `npx netlify dev` running on default port):
 *   node scripts/smoke-chat-completions.mjs
 *
 * Production:
 *   CHAT_SMOKE_URL=https://your-site.netlify.app node scripts/smoke-chat-completions.mjs
 *
 * Expects 200 and JSON with a "reply" field when Gemini is configured.
 */

const base = (process.env.CHAT_SMOKE_URL || 'http://localhost:8888').replace(/\/$/, '');
const url = `${base}/.netlify/functions/chat-completions`;

const body = {
  sessionId: `smoke_${Date.now()}`,
  mode: 'chat',
  locale: 'en-CA',
  pageContext: '/',
  messages: [
    {
      id: 'u1',
      role: 'user',
      text: 'Say hello in one short sentence.',
      createdAt: Date.now(),
    },
  ],
};

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const text = await res.text();
let json;
try {
  json = JSON.parse(text);
} catch {
  json = null;
}

if (!res.ok) {
  console.error('FAIL', res.status, text.slice(0, 500));
  process.exit(1);
}

if (!json?.reply || typeof json.reply !== 'string') {
  console.error('FAIL: missing reply in JSON', text.slice(0, 500));
  process.exit(1);
}

console.log('OK', res.status, 'reply length:', json.reply.length);
process.exit(0);

# Chatbot Release Checklist

## Gate C Hardening
- [x] Server-side key isolation (`GEMINI_API_KEY`) in Netlify Function.
- [x] Input constraints: payload/message length/message count caps + sanitization.
- [x] Per IP + session rate limiting with retryable 429 responses.
- [x] Prompt policy for no fabricated claims and no medical/legal/financial advice.
- [x] Prompt injection detection and safety flagging.
- [x] Non-sensitive analytics events only (`chat_open`, `chat_teaser_click`, `chat_prompt_click`, `chat_send`, `chat_cta_click`, `chat_error`).
- [x] A11y: keyboard focus loop inside panel, Escape-to-close, labeled controls.
- [x] Performance: deferred/lazy mount so no homepage blocking.
- [x] Security headers in `netlify.toml` (CSP, XFO, nosniff, permissions policy).

## Operational Runbook
- Add env vars in Netlify:
  - `GEMINI_API_KEY`
  - Optional `GEMINI_MODEL` (default fallback already provided).
- Confirm function route:
  - `/.netlify/functions/chat-completions`
- CLI smoke test (after deploy or with `npx netlify dev`):
  - `npm run smoke:chat` or `CHAT_SMOKE_URL=https://<site> npm run smoke:chat`
- Smoke test:
  - Open launcher
  - FAQ tab prompt
  - Live chat prompt
  - CTA navigation clicks
  - Offline fallback
  - Rate-limit response behavior

## Final Verdict
- GO for Phase 1 launch, conditional on Netlify environment variables being configured and production smoke tests passing.

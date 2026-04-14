# Dentech Website

Vite + React + React Router marketing site with a chat widget (Helpdesk + live Chat via Gemini on Netlify).

## Prerequisites

- Node.js (see `package.json` engines if specified)
- For **live Chat** locally or on Netlify: a [Google AI Studio](https://aistudio.google.com/apikey) API key (`GEMINI_API_KEY`)

## Install

```bash
npm install
```

## Environment variables

| Variable | Where | Purpose |
|----------|--------|--------|
| `GEMINI_API_KEY` | **Netlify** (Site → Environment variables) and **local `.env`** | Server-side only; used by `netlify/functions/chat-completions.ts` to call Gemini. |
| `GEMINI_MODEL` | Optional | Defaults to `gemini-2.0-flash` in the function. |

**Never commit secrets.** Copy [.env.example](.env.example) to `.env` for local use (file is gitignored).

### Production (Netlify)

1. In the Netlify UI, add `GEMINI_API_KEY` (and optionally `GEMINI_MODEL`).
2. Trigger a deploy so functions pick up the new env.
3. Verify: open the site → **Chat** tab → send a message; in DevTools **Network**, `POST /.netlify/functions/chat-completions` should return **200** with a JSON `reply`.

### Smoke test (function only)

With `npx netlify dev` running (see below), or against production:

```bash
npm run smoke:chat
# Production:
CHAT_SMOKE_URL=https://your-site.netlify.app npm run smoke:chat
```

## Run locally

### UI only (Vite)

```bash
npm run dev
```

The app loads at `http://localhost:3000`. **Live Chat will not work** here: the browser calls `/.netlify/functions/chat-completions`, which Vite does not serve, so you will see the “temporarily unavailable” fallback in Chat mode.

### Full stack (Vite + Netlify Functions + live Chat)

1. Copy `.env.example` → `.env` and set `GEMINI_API_KEY`.
2. Run:

```bash
npx netlify dev
```

Open the URL Netlify prints (often `http://localhost:8888`). Chat mode uses the same function path as production.

`[dev]` is configured in [netlify.toml](netlify.toml) (`targetPort` 3000 for Vite).

## Build

```bash
npm run build
npm run preview
```

## Troubleshooting live Chat

- **500 from `chat-completions`:** In Netlify → Functions → logs, look for JSON lines tagged `chat_completions_*` (missing key, Gemini HTTP status, empty output). Never paste API keys into logs.
- **Works on Netlify but not `npm run dev`:** Expected; use `netlify dev`.

# Chatbot Gate A Review

## Architecture
- Frontend modules implemented under `components/chat/`:
  - `ChatWidget`, `ChatLauncher`, `ChatTeaser`, `ChatPanel`, `ChatTabs`, `QuickPrompts`, `ChatMessages`, `ChatInput`, `ChatProvider`.
- Backend endpoint implemented at `netlify/functions/chat-completions.ts`.
- Curated knowledge contracts implemented in `data/chatbotFaq.ts` and `data/chatbotPrompts.ts`.
- Shared typed contract implemented in `types/chatbot.ts`.
- Chat widget is lazily mounted from `App.tsx` via deferred idle/interaction load, to avoid homepage LCP impact.

## API Contract
- Endpoint: `POST /.netlify/functions/chat-completions`
- Request keys:
  - `sessionId`
  - `messages[]`
  - `mode` (`faq` | `chat`)
  - `locale`
  - `pageContext`
- Response keys:
  - `reply`, `intent`, `confidence`, `suggestedCtas[]`, `suggestedPrompts[]`, `safetyFlags[]`
- Error envelope:
  - `code`, `message`, `retryable` (`400`, `429`, `500`)

## Threat Model + Controls
- Prompt injection attempts:
  - Pattern detection + safety flags + policy-bound system instruction.
- Abuse/spam:
  - Payload size cap, message count cap, message length cap, per IP+session window rate limiting.
- PII/logging risk:
  - No raw chat logs persisted; sanitized request handling only.
- Claim integrity:
  - Approved FAQ context only + explicit no-fabrication policy in prompt.
- Availability:
  - Client retries with backoff + graceful fallback reply when function/model is unavailable.

## Performance Budget
- Chat code path is deferred and lazy-loaded after idle/interaction.
- Initial route paint and route suspense path remain unchanged for core pages.
- No chat network call is made before user interaction.
- Expected bundle impact: one additional async chat chunk (not on critical path for `/`).

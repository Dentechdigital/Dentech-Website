# @dentech/chat-widget

Reusable React chat + helpdesk widget (floating launcher, teaser, panel, messages, FAQ browser).

## Peer dependencies

- `react`
- `react-dom`
- `lucide-react`

The host app must also process **Tailwind** (or equivalent) for the class names used in this package. Add the package path to Tailwind `content`, for example:

```js
'./packages/chat-widget/src/**/*.{js,ts,jsx,tsx}',
```

## Styles

The entry module `src/index.tsx` imports `chat-widget.css` (animations, scrollbars, reduced-motion). Import the package from runtime code so the stylesheet is bundled:

```tsx
import { MountChatWidget } from '@dentech/chat-widget';
```

## Mounting

1. Build a `ChatRuntimeConfig` (copy, FAQ items, prompts, helpdesk categories, assets, session key, locale, `getPageContext`, `sendChatCompletion`, optional `onTrack`, and a `LinkComponent` for in-app navigation).
2. Render:

```tsx
import { MountChatWidget } from '@dentech/chat-widget';

<MountChatWidget config={myConfig} routeKey={pathname + hash} />
```

- **`routeKey`**: when it changes, the panel closes. Omit to disable route-driven close.

Alternatively compose lower-level pieces:

```tsx
import { ChatConfigProvider, ChatProvider, ChatWidgetView } from '@dentech/chat-widget';

<ChatConfigProvider value={myConfig}>
  <ChatProvider>
    <ChatWidgetView routeKey={...} />
  </ChatProvider>
</ChatConfigProvider>
```

## Types

Shared API/types are exported from the package main entry. This repo re-exports them from `types/chatbot.ts` for Netlify functions and data modules.

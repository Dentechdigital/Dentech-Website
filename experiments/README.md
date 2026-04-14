# Static-site experiments

## Branch: `experiment/astro-static-prototype`

This branch adds **`experiments/dentech-astro`**, a minimal **Astro** app to try an HTML-first build **without** replacing the production **Vite + React** app.

### Why it exists

- **Main / production** stays the full React SPA (`npm run dev` at repo root).
- **This folder** is a sandbox: static pages + optional **React islands** (e.g. chat later).

### Run the prototype

```bash
cd experiments/dentech-astro
npm install   # if needed
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

### Build

```bash
cd experiments/dentech-astro
npm run build
npm run preview
```

### If you do not want Astro

```bash
git checkout main
```

You can delete the branch locally: `git branch -D experiment/astro-static-prototype` (only after switching away).

### Next steps (if the prototype wins)

- Add Tailwind or copy design tokens from the main app.
- Generate blog routes from the same markdown/data (content collections or build script).
- Mount `@dentech/chat-widget` as a `client:idle` or `client:visible` island and point API URLs at the same Netlify functions.

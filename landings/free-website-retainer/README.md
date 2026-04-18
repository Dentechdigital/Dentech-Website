# Free website + 6-month retainer — landing page

Self-contained Vite + React + Tailwind app for a **subdomain or separate Netlify site**. Not wired into the main `App.tsx` router.

## Develop

```bash
cd landings/free-website-retainer
npm install
npm run dev
```

Opens the Vite dev server (default port `3010`). **Netlify Forms submissions do not work on `vite dev`**; use `netlify dev` from the repo root with this site’s build output, or test forms on a Netlify deploy preview.

## Build

```bash
npm run build
```

Output: `dist/`.

## Environment

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical origin for this LP (no trailing slash), e.g. `https://offer.example.com` — powers `og:url` and `link[rel=canonical]`. |
| `VITE_MAIN_SITE_URL` | Main Dentech site for footer and external links (default `https://dentechdigital.com`). |
| `VITE_BASE_URL` | Optional; Vite `base` if not deployed at domain root (default `/`). |

## Netlify (subdomain)

1. New site (or branch) with **Publish directory**: `landings/free-website-retainer/dist`.
2. **Build command**: `npm install && npm run build` with **Base directory** set to `landings/free-website-retainer` (or run from monorepo root with an adjusted command).
3. After first successful deploy, open **Forms** in Netlify and confirm **`free-website-retainer-lead`** is detected (from the hidden form in `index.html`).
4. Set env vars `VITE_SITE_URL` and `VITE_MAIN_SITE_URL` for production.

## QA (automated + manual)

```bash
npm run qa
```

Runs TypeScript check + production build + `scripts/postbuild-verify.mjs` (confirms Netlify form markup exists in `dist/index.html`).

### Lighthouse (after deploy)

Replace `URL` with your preview or production URL:

```bash
npx lighthouse "URL" --only-categories=performance,accessibility,best-practices,seo --preset=desktop --output=html --output-path=./lh-landing.html
```

Suggested targets: Performance ≥ 85 (mobile often lower), Accessibility ≥ 90, Best practices / SEO ≥ 90 — tune to real assets.

### Accessibility (manual)

- Tab through header nav, FAQ accordions (focus visible), form fields, sticky mobile CTA.
- Run **axe DevTools** in Chrome on `/` after deploy.
- Confirm FAQ uses `button` + `aria-expanded` + `aria-controls` (implemented in `FaqAccordion.tsx`).

### Cross-browser smoke

- Safari iOS + Chrome Android: hero image loads, FAQ toggles, form validation messages, sticky CTA does not cover submit button (bottom padding on `main`).

### Forms

- Submit once on **Netlify** and verify the entry in the dashboard and email notification (if configured).

## Form name

`free-website-retainer-lead` — must match `index.html` hidden form and the `form-name` field in `LeadForm.tsx` POST body.

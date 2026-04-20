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

## Page structure (section order)

1. **Hero** — Value prop for new clinic owners, offer chips, scarcity (capacity-framed), primary CTA **Check eligibility**.
2. **Offer** (`#offer`) — Three pillars: retainer, site included, hosting in retainer.
3. **Fit** (`#fit`) — Good fit / not a fit.
4. **Site** (`#included`) — Five pages + extras.
5. **Retainer** (`#retainer`) — Starter / Signature / Elite tiers + what to expect.
6. **Pricing** (`#pricing`) — Plain-English table (primary place for **$150/mo** hosting detail).
7. **Process** (`#process`) — Four steps + what to prepare.
8. **Trust** (`#trust`) — Logos and testimonials (separate visual groups).
9. **FAQ** (`#faq`) — Objections for new owners.
10. **Apply** (`#apply`) — Form + phone/email aside.

Skip link: first focusable control in `index.html` → `#main-content` on `<main>`.

**QA log:** See [`QA_REPORT.md`](QA_REPORT.md) for the pre-launch checklist summary.

## Environment

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical origin for this LP (no trailing slash), e.g. `https://offer.example.com` — powers `og:url` and `link[rel=canonical]`. |
| `VITE_MAIN_SITE_URL` | Main Dentech site for footer and external links (code default `https://dentechdigital.ca`; override in Netlify if needed). |
| `VITE_BASE_URL` | Optional; Vite `base` if not deployed at domain root (default `/`). |

## Netlify + subdomain (domain already on Netlify, DNS on Porkbun)

Use a **second Netlify site** for this LP (same Git repo as the main site). The main site keeps `dentechdigital.ca`; the LP lives on something like `offer.dentechdigital.ca`.

### A. Create the Netlify site

1. Netlify → **Add new site** → **Import an existing project** → pick this repo.
2. **Site configuration** (before or after first deploy):
   - **Base directory:** `landings/free-website-retainer`  
     Netlify will use [`netlify.toml`](netlify.toml) in that folder (`command` + `publish`).
   - If the UI asks explicitly: **Build command** `npm run build`, **Publish directory** `dist` (relative to base directory).
3. **Deploy** the site. Fix any build errors (Node version: use **20** or **22** in *Site settings → Build & deploy → Environment → NODE_VERSION* if needed).

### B. Environment variables (production + Deploy Previews)

**Site settings → Environment variables → Add variable:**

| Key | Example value |
|-----|----------------|
| `VITE_SITE_URL` | `https://offer.dentechdigital.ca` (no trailing slash; use your real subdomain) |
| `VITE_MAIN_SITE_URL` | `https://dentechdigital.ca` |

Trigger **Deploys → Trigger deploy → Clear cache and deploy site** so the build picks up env vars.

### C. Attach the subdomain in Netlify (LP site only)

1. Open the **new LP site** (not the main marketing site).
2. **Domain management → Add a domain →** enter e.g. `offer.dentechdigital.ca`.
3. Netlify shows **DNS configuration** — copy the **CNAME** target (usually `something.netlify.app`).

### D. Porkbun DNS

1. Porkbun → **Domain Management** → **dentechdigital.ca** → **DNS** (Edit under “AUTHORITATIVE DNS”).
2. **Add** a record:
   - **Type:** `ALIAS` or `CNAME` (Porkbun supports CNAME on subdomains; if they offer **ALIAS** for root only, use **CNAME** for `offer`).
   - **Host:** `offer` (subdomain only).
   - **Answer:** paste the Netlify hostname (e.g. `your-lp-site-name.netlify.app`).
   - **TTL:** 300 or default.
3. Save. Wait a few minutes; Netlify will provision **HTTPS** when DNS verifies.

### E. Forms

After a successful production deploy: **Forms** tab on the **LP site** → confirm **`free-website-retainer-lead`**. Configure notifications under **Forms → Form notifications** if you want email on each submission.

### F. Optional: link from main site

When `https://offer.dentechdigital.ca` works, add a CTA link from the main repo (e.g. Special Offer section) to that URL in a separate change.

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

- From page load, press **Tab** once: **Skip to main content** should appear and move focus into the page.
- Tab through header nav, FAQ accordions (focus visible), form fields, sticky mobile CTA.
- Run **axe DevTools** in Chrome on `/` after deploy.
- Confirm FAQ uses `button` + `aria-expanded` + `aria-controls` (implemented in `FaqAccordion.tsx`).

### Cross-browser smoke

- Safari iOS + Chrome Android: hero image loads, FAQ toggles, form validation messages, sticky CTA does not cover submit button (bottom padding on `main`).

### Forms

- Submit once on **Netlify** and verify the entry in the dashboard and email notification (if configured).

## Form name

`free-website-retainer-lead` — must match `index.html` hidden form and the `form-name` field in `LeadForm.tsx` POST body.

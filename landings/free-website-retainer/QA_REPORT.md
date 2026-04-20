# Landing page QA report — `free-website-retainer` (production pass)

**Date:** 2026-04-17  
**Scope:** Pre-launch quality gate + IA/content/UX refresh for new dental clinic owners.

## Phase 1 — Quality gate

| Check | Result | Notes |
| --- | --- | --- |
| Build & types (`npm run typecheck && npm run build`) | **Pass** | Clean before changes; re-run after edits. |
| One H1, heading hierarchy | **Fixed** | Single H1 in hero; section H2s; FAQ uses H2 + H3 per item. |
| Skip link | **Fixed** | Added “Skip to main content” → `#main-content`. |
| Form labels / errors / focus | **Pass** | Enhanced with `aria-describedby` for timeline & budget hints. |
| FAQ keyboard | **Pass** | Buttons toggle panels; focus outline on buttons. |
| Contrast (dark strip, amber) | **Pass** | Trust section white on blue-950; amber on stone text. |
| Sticky mobile CTA vs footer | **Pass** | `pb-28` on main preserves space; spot-check on narrow viewports. |
| Hero performance | **Pass** | Hero image `eager` + `fetchPriority="high"`; below-fold assets lazy where applicable. |
| Trust / scarcity copy | **Pass** | Cohort cap in `offerScarcity.ts`; no fake timers. |
| Consent / Netlify | **Pass** | Hidden static form + React `fetch` POST; consent references main site. |
| Env / `mainSiteAsset` | **Pass** | `VITE_MAIN_SITE_URL` defaults to production domain in `config.ts`. |
| Content redundancy ($150/mo) | **Addressed** | Primary explanation: **Pricing** table + **Offer** third card; hero amber removed; form uses short “before you submit”; footer legal only. |

## Waived / manual

- **Lighthouse CI:** Run locally or in deploy pipeline when convenient (`npm run qa` if configured).
- **Cross-browser:** Manual smoke on Safari/Chrome recommended before paid traffic.

## Definition of done

- [x] IA: fit section, pricing after retainer tiers, trust split logos/reviews.
- [x] Copy aligned with ICP (new clinic owners).
- [x] Single primary CTA label: **Check eligibility** (header, hero, mobile bar).

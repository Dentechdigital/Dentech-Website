# Landing page QA report — `free-website-retainer` (production pass)

**Last validated:** 2026-04-17 (re-run: typecheck, build, `npm run qa`)  
**ICP:** New dental clinic owners (early-stage / opening soon / recently opened).  
**Principles:** Trustworthy copy, no spammy urgency; scarcity only via honest capacity framing (`offerScarcity.ts`).

## Phase 1 — Quality gate

| Check | Result | Notes |
| --- | --- | --- |
| Build & types (`npm run typecheck && npm run build`) | **Pass** | Re-run after each change. |
| `npm run qa` (postbuild Netlify form verify) | **Pass** | Confirms hidden form in `dist/index.html`. |
| One H1, heading hierarchy | **Pass** | H1 in `HeroSection`; sections use H2; FAQ accordion headers use H3 + `button`. |
| Skip link | **Pass** | `index.html` → `#main-content`; styles in `global.css`. |
| Form labels / errors / focus | **Pass** | `LeadForm` + `aria-describedby` on timeline/budget; focus rings on CTAs. |
| FAQ keyboard | **Pass** | `button` + `aria-expanded` / `aria-controls`; panel content when open only. |
| Contrast (dark trust strip, amber, blue bridge) | **Pass** | Trust + hero bridge: light text on blue; form amber on stone. |
| Sticky mobile CTA vs footer | **Pass** | `main` uses `pb-28 md:pb-0`. |
| Hero performance | **Pass** | Hero image `eager` + `fetchPriority="high"`; trust/partner images `loading="lazy"`. |
| Trust / scarcity | **Pass** | Cohort cap disclosed; no countdown/stock gimmicks. |
| Consent / Netlify | **Pass** | Hidden form + React POST; honeypot `bot-field`; consent checkbox. |
| Env / `mainSiteAsset()` | **Pass** | `VITE_MAIN_SITE_URL` in `config.ts` (default `https://dentechdigital.ca`). |

### Content redundancy — `$150/mo` hosting / maintenance

| Location | Role |
| --- | --- |
| **Pricing table** (`PricingStrip`) | **Primary** — full row + subtext. |
| **Offer** (`OfferSnapshot` intro + Signature list) | **Secondary** — bundle framing + feature list. |
| FAQ (“monthly fee if included?”) | **Echo** — objection handler. |
| Form amber banner (`LeadForm`) | **Echo** — short + link to `#pricing`. |
| Meta description (`index.html`) | **Echo** — SEO one-liner. |
| Footer | **None** — legal disclaimer only (no fee repeat). |

**Offer tier:** The website bundle on this LP is **Signature Marketing only** at **$2,500/mo** for six months (`WEBSITE_OFFER_TIER_LABEL` / `WEBSITE_OFFER_MONTHLY` in `marketingRetainerContent.ts`). Starter and Elite remain in `MARKETING_RETAINER_TIERS` for main-site parity; the LP links to main-site contact for other tiers.

## Phase 2 — Information architecture (current `App.tsx` order)

1. **Hero** — Value prop, CTAs, blue bridge bar (badge, chips, capacity scarcity).  
2. **Offer** `#offer` — Site bullets, Signature features, 3-step flow, availability, CTA to `#apply`.  
3. **Pricing** `#pricing` — Plain-English table (no mid-page CTA).  
4. **Trust** `#trust` — Logos + two testimonials.  
5. **FAQ** `#faq` — Five questions + main-site contact link.  
6. **Apply** `#apply` — Form + `ApplyAside` (phone/email/address).  
7. **Footer** — Links + disclaimer.

**Header nav:** Offer, Pricing, FAQ + primary **Check eligibility** (not every anchor).

**CTA discipline:** Primary label **Check eligibility** — hero, header, sticky mobile, offer block, and form submit wording distinct (“Submit eligibility request”) to avoid duplicate control labels.

## Phases 3–4 — Content / UX (summary)

- ICP jobs-to-be-done reflected in hero, offer, pricing table, and FAQ (pre-opening, Wix comparison, ownership, fees).  
- Voice lines: hero bridge + offer steps + apply intro.  
- `marketingRetainerContent.ts` aligned with main site `PricingPlans` marketing tiers.

## Phase 5 — Definition of done

- [x] QA table current; redundancy documented.  
- [x] Build + `npm run qa` green.  
- [x] No contradictory pricing claims (tiers vs $150 hosting clearly scoped).  
- [ ] Lighthouse / cross-browser: manual on deploy URL (waived in CI).  

## Waived / manual

- Lighthouse scores after production deploy.  
- Safari iOS + Chrome Android smoke (sticky CTA, FAQ, form).

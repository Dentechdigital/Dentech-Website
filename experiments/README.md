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

### Deploy online

**Option A — GitHub Pages (automatic on push to this branch)**

1. In the GitHub repo: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
2. Merge or keep `.github/workflows/deploy-astro-prototype.yml` on `experiment/astro-static-prototype` (it ships with this branch).
3. Push the branch; the workflow **Deploy Astro prototype** builds `experiments/dentech-astro` and publishes `dist/`.
4. Open **`https://<owner>.github.io/<repo>/`** (for this repo: `https://dentechdigital.github.io/Dentech-Website/` once Pages is enabled).

`ASTRO_SITE` and `ASTRO_BASE` are set in the workflow so asset URLs work under the `/repo-name/` path.

**Option B — Netlify (separate site, root URL, no `/repo/` base)**

1. **Netlify → Add new site → Import from Git** (same GitHub repo).
2. Branch: **`experiment/astro-static-prototype`**.
3. **Base directory:** `experiments/dentech-astro`.
4. Build: **`npm run build`**, Publish: **`dist`** (already set in that folder’s `netlify.toml`).
5. Do **not** reuse the main site’s strict CSP: this Astro app uses inline script/style for islands; the prototype `netlify.toml` keeps headers minimal.

### Next steps (if the prototype wins)

- Add Tailwind or copy design tokens from the main app.
- Generate blog routes from the same markdown/data (content collections or build script).
- Mount `@dentech/chat-widget` as a `client:idle` or `client:visible` island and point API URLs at the same Netlify functions.

# Dentech Astro prototype

Minimal **Astro + React** sandbox inside the Dentech monorepo. See **`../README.md`** for branch and workflow.

## Commands

| Command        | Action                          |
| -------------- | ------------------------------- |
| `npm run dev`  | Dev server (~4321)              |
| `npm run build`| Static output → `dist/`         |
| `npm run preview` | Serve production build locally |

## What this proves

- The default page is **static HTML** from `src/pages/index.astro`.
- `IslandDemo` is a **React island** with `client:visible` so JS loads when the component is near the viewport.

This is **not** wired to the main app’s router, chat, or blog data yet—those are follow-ups if you adopt Astro for production.

// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// GitHub Pages (and similar) need site + base; local dev leaves these unset.
const site = process.env.ASTRO_SITE?.trim();
const base = process.env.ASTRO_BASE?.trim();

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  ...(base ? { base } : {}),
  integrations: [react()],
});
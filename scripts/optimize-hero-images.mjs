/**
 * One-off / CI: emit .webp siblings for large hero PNGs (run after adding new hero art).
 * Usage: node scripts/optimize-hero-images.mjs
 */
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const files = [
  'public/about/hero-about.png',
  'public/contact/hero-contact.png',
  'public/case-studies/hero-case-studies-banner.png',
  'public/hero-background.png',
  'public/services/local-seo/hero-collage-seo.png',
  'public/services/websites/hero-collage-websites.png',
  'public/services/ai-automation/hero-collage-ai.png',
  'public/services/paid-ads/hero-collage-ads.png',
  'public/services/print/hero-collage-print.png',
  'public/services/social-content/hero-collage-social.png',
];

for (const input of files) {
  if (!existsSync(input)) {
    console.warn('skip (missing):', input);
    continue;
  }
  const output = input.replace(/\.png$/i, '.webp');
  await sharp(input).webp({ quality: 82, effort: 6 }).toFile(output);
  console.log('ok', input, '->', output);
}

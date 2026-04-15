/**
 * 1) Emit .webp from PNG/JPG in /public (skips favicon.png).
 * 2) Emit responsive WebP variants from key master .webp files (mobile LCP / avatars).
 * 3) Re-encode oversized marketing WebPs in place (cap width + quality) to shrink deploy size.
 * Usage: node scripts/optimize-hero-images.mjs
 */
import { readdir, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const IMAGE_RE = /\.(png|jpe?g)$/i;

/** Resize masters for srcset (paths relative to repo root). */
const RESPONSIVE_WEBP = [
  { file: 'public/dentist-cutout.webp', widths: [480, 640, 800], quality: 72 },
  { file: 'public/avatar.webp', widths: [80, 160] },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (IMAGE_RE.test(entry.name) && entry.name !== 'favicon.png') {
      files.push(fullPath);
    }
  }
  return files;
}

const rasterSources = await walk(PUBLIC_DIR);

for (const input of rasterSources) {
  const output = input.replace(IMAGE_RE, '.webp');
  await sharp(input).webp({ quality: 82, effort: 6 }).toFile(output);
  console.log('ok', path.relative(process.cwd(), input), '->', path.relative(process.cwd(), output));
}

for (const { file, widths, quality = 80 } of RESPONSIVE_WEBP) {
  const input = path.resolve(file);
  if (!existsSync(input)) {
    console.warn('skip responsive (missing):', file);
    continue;
  }
  const dir = path.dirname(input);
  const base = path.basename(input, '.webp');
  for (const w of widths) {
    const outPath = path.join(dir, `${base}-${w}w.webp`);
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(outPath);
    console.log('ok responsive', path.relative(process.cwd(), outPath));
  }
}

/** Masters that ship large; cap pixel width for web heroes (in-place replace). */
const REENCODE_WEBP_MASTERS = [
  { file: 'public/about/hero-about.webp', maxWidth: 1920, quality: 78 },
  { file: 'public/case-studies/hero-case-studies-banner.webp', maxWidth: 1920, quality: 78 },
  { file: 'public/services/ai-automation/hero-collage-ai.webp', maxWidth: 1600, quality: 76 },
  { file: 'public/services/local-seo/hero-collage-seo.webp', maxWidth: 1600, quality: 76 },
  { file: 'public/services/paid-ads/hero-collage-ads.webp', maxWidth: 1600, quality: 76 },
  { file: 'public/services/print/hero-collage-print.webp', maxWidth: 1600, quality: 76 },
  { file: 'public/services/social-content/hero-collage-social.webp', maxWidth: 1600, quality: 76 },
  { file: 'public/services/websites/hero-collage-websites.webp', maxWidth: 1600, quality: 76 },
];

for (const { file, maxWidth, quality } of REENCODE_WEBP_MASTERS) {
  const input = path.resolve(file);
  if (!existsSync(input)) {
    console.warn('skip reencode (missing):', file);
    continue;
  }
  const meta = await sharp(input).metadata();
  const tmp = `${input}.opt.tmp.webp`;
  let img = sharp(input);
  if (meta.width && meta.width > maxWidth) {
    img = img.resize({ width: maxWidth, withoutEnlargement: true });
  }
  await img.webp({ quality, effort: 6 }).toFile(tmp);
  await rename(tmp, input);
  console.log('ok reencode', path.relative(process.cwd(), input));
}

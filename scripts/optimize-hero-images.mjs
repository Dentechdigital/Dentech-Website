/**
 * 1) Emit .webp from PNG/JPG in /public (skips favicon.png).
 * 2) Emit responsive WebP variants from key master .webp files (mobile LCP / avatars).
 * Usage: node scripts/optimize-hero-images.mjs
 */
import { readdir } from 'node:fs/promises';
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

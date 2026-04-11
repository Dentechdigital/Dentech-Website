/**
 * Emit .webp siblings for all PNG/JPG assets in /public.
 * Usage: node scripts/optimize-hero-images.mjs
 */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const IMAGE_RE = /\.(png|jpe?g)$/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (IMAGE_RE.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = await walk(PUBLIC_DIR);

for (const input of files) {
  const output = input.replace(IMAGE_RE, '.webp');
  await sharp(input).webp({ quality: 82, effort: 6 }).toFile(output);
  console.log('ok', path.relative(process.cwd(), input), '->', path.relative(process.cwd(), output));
}

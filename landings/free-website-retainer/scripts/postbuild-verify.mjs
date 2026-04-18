/**
 * Static checks on dist/ to catch missing Netlify form or critical sections.
 * Run: node scripts/postbuild-verify.mjs (from landings/free-website-retainer after build)
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = join(root, 'dist', 'index.html');

if (!existsSync(indexPath)) {
  console.error('Missing dist/index.html — run npm run build first.');
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');
const required = [
  'data-netlify="true"',
  'free-website-retainer-lead',
  'bot-field',
  'id="root"',
];

let failed = false;
for (const s of required) {
  if (!html.includes(s)) {
    console.error(`Missing expected snippet: ${s}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('postbuild-verify: OK');

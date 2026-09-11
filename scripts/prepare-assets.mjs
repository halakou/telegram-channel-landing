// Post-build script: create .assetsignore to suppress wrangler v4 warning
// about Astro's SSR adapter _worker.js directory in Pages assets.

import { existsSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const assetsIgnore = join(distDir, '.assetsignore');

if (existsSync(assetsIgnore)) {
  console.log('  [skip] .assetsignore already exists in dist/');
} else {
  writeFileSync(assetsIgnore, '_worker.js\n');
  console.log('  [create] .assetsignore in dist/');
}

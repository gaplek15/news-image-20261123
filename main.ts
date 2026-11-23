// news-image-20261123 entry: the program copies the front page image
// (entry.png, built in this session) into the grader's output directory.
// Node 22, standard library only, no network, fully deterministic:
// the same bytes go out on every run.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
// Fail loudly instead of silently shipping a truncated copy: the two runs
// must write the same bytes, so a size mismatch here is a hard error.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error(`entry.png copy size mismatch: ${statSync(src).size} vs ${statSync(dst).size}`);
}

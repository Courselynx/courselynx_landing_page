import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(projectRoot, 'public');
const pages = [
  'index.html',
  'features.html',
  'use-cases.html',
  'become-intern.html',
  'privacy-policy.html',
  'eula.html',
  'terms.html',
  'success.html',
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await Promise.all(
  pages.map((page) => cp(join(projectRoot, page), join(outputDir, page))),
);

await cp(join(projectRoot, 'assets'), join(outputDir, 'assets'), {
  recursive: true,
  filter: (source) => !['link.png', 'link2.png'].includes(source.split('/').at(-1)),
});

import { argv } from 'node:process';

import { gitRelease } from './git.js';
import { createGithubRelease } from './github.js';
import { npmRelease } from './npm.js';
import { npm, rootPackagePath } from './utils.js';

async function main() {
  const version = argv[2] as string | undefined;
  if (version === undefined) {
    throw new Error('No version');
  }

  console.log('Running lint, tests and build');
  await Promise.all([
    npm(['run', 'lint'], rootPackagePath),
    npm(['run', 'test'], rootPackagePath),
    npm(['run', 'build']),
  ]);

  console.log('Yarn release');
  await npmRelease(version);

  console.log('Git release');
  await gitRelease(version);

  console.log('Github release');
  await createGithubRelease(version);
}

void main();

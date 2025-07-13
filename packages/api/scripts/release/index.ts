import path from 'node:path';
import { argv } from 'node:process';

import { gitRelease } from './git.js';
import { createGithubRelease } from './github.js';
import { npmRelease } from './npm.js';
import { apiPackagePath, npm } from './utils.js';

const rootPackagePath = path.join(apiPackagePath, '../../');

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

import { execFileAsync } from '@telegram-standard-bot-api/shared';

import { apiPackagePath } from './utils.js';

function git(args: string[]) {
  return execFileAsync('git', args, {
    cwd: apiPackagePath,
    encoding: 'utf8',
    shell: true,
  });
}

export async function gitRelease(newVersion: string) {
  const message = `"Release ${newVersion}"`;

  await git(['add', '.']);
  await git(['commit', '-m', message]);
  await git(['tag', '-a', newVersion, '-m', message]);
  await git(['push', 'origin', newVersion]);
  await git(['push', 'origin', 'main']);
}

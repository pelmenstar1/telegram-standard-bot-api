import path from 'node:path';

import { execFileAsync } from '@telegram-standard-bot-api/shared';

export const apiPackagePath = path.join(import.meta.dirname, '../../');

export async function npm(args: string[], cwd: string = apiPackagePath) {
  await execFileAsync('npm', args, {
    cwd,
    shell: true,
    encoding: 'utf8',
  });
}

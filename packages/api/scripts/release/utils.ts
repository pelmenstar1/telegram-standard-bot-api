import path from 'node:path';

import { execFileAsync } from './process.js';

export const apiPackagePath = path.join(import.meta.dirname, '../../');
export const rootPackagePath = path.join(apiPackagePath, '../../');

export async function pnpm(args: string[], cwd: string = apiPackagePath) {
  await execFileAsync('pnpm', args, {
    cwd,
    shell: true,
    encoding: 'utf8',
  });
}

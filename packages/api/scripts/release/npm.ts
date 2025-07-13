import fsp from 'node:fs/promises';
import path from 'node:path';

import { apiPackagePath, npm } from './utils.js';

async function bumpVersion(newVersion: string) {
  type PackageInfo = { version: string };

  const packagePath = path.join(apiPackagePath, 'package.json');
  const packageContent = await fsp.readFile(packagePath, 'utf8');
  const packageInfo = JSON.parse(packageContent) as PackageInfo;

  packageInfo.version = newVersion;

  const newPackageContent = JSON.stringify(packageInfo, undefined, 2);

  await fsp.writeFile(packagePath, `${newPackageContent}\n`, 'utf8');
}

export async function npmRelease(newVersion: string) {
  await bumpVersion(newVersion);
  await npm(['publish']);
}

import fsp from 'node:fs/promises';
import path from 'node:path';

import { execFileAsync } from '@telegram-standard-bot-api/shared';

import {
  compareDirectorySnapshots,
  takeDirectorySnapshot,
} from './directorySnapshot';
import { bumpMinor } from './version';

const apiPackagePath = path.join(import.meta.dirname, '../../api');
const apiSourcePath = path.join(apiPackagePath, 'src');
const generatorPackagePath = path.join(import.meta.dirname, '../../generator');

async function runGenerate() {
  await execFileAsync('npm', ['run', 'generate', '--remote'], {
    cwd: generatorPackagePath,
    shell: true,
    encoding: 'utf8',
  });
}

async function resolveNewReleaseVersion(): Promise<string> {
  type PackageInfo = { version: string };

  const apiPackageContent = await fsp.readFile(
    path.join(apiPackagePath, 'package.json'),
    'utf8'
  );

  const apiPackageInfo = JSON.parse(apiPackageContent) as PackageInfo;

  return bumpMinor(apiPackageInfo.version);
}

async function releaseIt() {
  const newVersion = await resolveNewReleaseVersion();
  console.log(`Releasing version ${newVersion}`);

  await execFileAsync('npm', ['release', newVersion], {
    cwd: apiPackagePath,
    encoding: 'utf8',
    shell: true,
    env: process.env,
  });
}

async function main() {
  const oldSnapshot = await takeDirectorySnapshot(apiSourcePath);
  await runGenerate();

  const newSnapshot = await takeDirectorySnapshot(apiSourcePath);

  if (compareDirectorySnapshots(oldSnapshot, newSnapshot)) {
    console.log('Nothing changed.');
    return;
  }

  await releaseIt();
}

void main();

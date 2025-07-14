import fs from 'node:fs';
import path from 'node:path';
import { loadEnvFile } from 'node:process';

export function getBotKey() {
  const envLocalPath = path.join(import.meta.dirname, '../.env.local');
  if (fs.existsSync(envLocalPath)) {
    loadEnvFile(envLocalPath);
  }

  return process.env.TEST_BOT_KEY;
}

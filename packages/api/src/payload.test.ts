import fs from 'node:fs';
import path from 'node:path';
import { loadEnvFile } from 'node:process';

import { test } from 'vitest';

import { createTelegramBot } from './bot.js';
import { botMethod } from './method.js';
import { GetChat } from './methods.js';
import { formDataPayloadTransformer } from './payload.js';
import { Chat } from './types.generated.js';

const envLocalPath = path.join(import.meta.dirname, '../.env.local');
if (fs.existsSync(envLocalPath)) {
  loadEnvFile(envLocalPath);
}

const botKey = process.env.TEST_BOT_KEY;

test.runIf(botKey !== undefined)('formDataPayloadTransformer', async () => {
  if (botKey === undefined) {
    throw new Error('Cannot happen');
  }

  const bot = createTelegramBot();
  bot.setApiKey(botKey);
  await bot(
    botMethod<GetChat, Chat>(
      'getChat',
      formDataPayloadTransformer
    )({ chat_id: '@durov' })
  );
});

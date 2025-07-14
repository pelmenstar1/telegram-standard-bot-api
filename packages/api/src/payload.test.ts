import { test } from 'vitest';

import { createTelegramBot } from './bot.js';
import { botMethod } from './method.js';
import { GetChat } from './methods.js';
import { formDataPayloadTransformer } from './payload.js';
import { getBotKey } from './testUtils.js';
import { Chat } from './types.generated.js';

const botKey = getBotKey();

test.runIf(botKey !== undefined)('formDataPayloadTransformer', async () => {
  if (botKey === undefined) {
    throw new Error('Cannot happen');
  }

  const bot = createTelegramBot();
  bot.setApiKey(botKey);
  await bot(
    botMethod<(payload: GetChat) => Chat>(
      'getChat',
      formDataPayloadTransformer
    )({ chat_id: '@durov' })
  );
});

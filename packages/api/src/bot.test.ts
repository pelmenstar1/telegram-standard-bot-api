import { expect, test } from 'vitest';

import { createTelegramBot } from './bot.js';
import { getChat } from './methods.js';
import { getBotKey } from './testUtils.js';

const botKey = getBotKey();

test.runIf(botKey !== undefined)('getChat', async () => {
  if (botKey === undefined) {
    throw new Error('Cannot happen');
  }

  const bot = createTelegramBot({ apiKey: botKey });

  const result = await bot(getChat({ chat_id: '@durov' }));
  expect(result.id).toBe(-1_001_006_503_122);
});

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { BotName } from '../types.js';

export type GetMyName = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code: string;
};

/**
 * Use this method to get the current bot name for the given user language. Returns {@link BotName} on success.
 */
export const getMyName = /* @__PURE__ */ botMethod<GetMyName, BotName>(
  'getMyName'
);

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { BotShortDescription } from '../types.js';

export type GetMyShortDescription = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code: string;
};

/**
 * Use this method to get the current bot short description for the given user language. Returns {@link BotShortDescription} on success.
 */
export const getMyShortDescription = /* @__PURE__ */ botMethod<
  GetMyShortDescription,
  BotShortDescription
>('getMyShortDescription');

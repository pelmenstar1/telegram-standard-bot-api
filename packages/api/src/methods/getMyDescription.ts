// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { BotDescription } from '../types';

export type GetMyDescription = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code: string;
};

/**
 * Use this method to get the current bot description for the given user language. Returns {@link BotDescription} on success.
 */
export const getMyDescription = botMethod<GetMyDescription, BotDescription>(
  'getMyDescription'
);

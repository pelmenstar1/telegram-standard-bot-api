// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { Sticker } from '../types';

export type GetCustomEmojiStickers = {
  /**
   * A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
   */
  custom_emoji_ids?: string[];
};

/**
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 */
export const getCustomEmojiStickers = botMethod<
  GetCustomEmojiStickers,
  Sticker
>('getCustomEmojiStickers');

// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetStickerEmojiList = {
  /**
   * File identifier of the sticker
   */
  sticker?: string;

  /**
   * A JSON-serialized list of 1-20 emoji associated with the sticker
   */
  emoji_list?: string[];
};

/**
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 */
export const setStickerEmojiList = botMethod<SetStickerEmojiList, boolean>(
  'setStickerEmojiList'
);

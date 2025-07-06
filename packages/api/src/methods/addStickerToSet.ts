// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InputSticker } from '../types';

export type AddStickerToSet = {
  /**
   * User identifier of sticker set owner
   */
  user_id?: number;

  /**
   * Sticker set name
   */
  name?: string;

  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
   */
  sticker?: InputSticker;
};

/**
 * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
 */
export const addStickerToSet = botMethod<AddStickerToSet, boolean>(
  'addStickerToSet'
);

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InputSticker } from '../types.js';

export type CreateNewStickerSet = {
  /**
   * User identifier of created sticker set owner
   */
  user_id: number;

  /**
   * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
   */
  name: string;

  /**
   * Sticker set title, 1-64 characters
   */
  title: string;

  /**
   * A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
   */
  stickers: InputSticker[];

  /**
   * Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
   */
  sticker_type?: string;

  /**
   * Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
   */
  needs_repainting?: boolean;
};

/**
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 */
export const createNewStickerSet = /* @__PURE__ */ botMethod<
  CreateNewStickerSet,
  boolean
>('createNewStickerSet');

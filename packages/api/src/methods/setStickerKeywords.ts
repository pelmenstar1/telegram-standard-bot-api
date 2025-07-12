// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetStickerKeywords = {
  /**
   * File identifier of the sticker
   */
  sticker?: string;

  /**
   * A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
   */
  keywords: string[];
};

/**
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 */
export const setStickerKeywords = /* @__PURE__ */ botMethod<
  SetStickerKeywords,
  boolean
>('setStickerKeywords');

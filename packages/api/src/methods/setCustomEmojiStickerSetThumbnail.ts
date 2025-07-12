// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetCustomEmojiStickerSetThumbnail = {
  /**
   * Sticker set name
   */
  name?: string;

  /**
   * Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
   */
  custom_emoji_id: string;
};

/**
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 */
export const setCustomEmojiStickerSetThumbnail = /* @__PURE__ */ botMethod<
  SetCustomEmojiStickerSetThumbnail,
  boolean
>('setCustomEmojiStickerSetThumbnail');

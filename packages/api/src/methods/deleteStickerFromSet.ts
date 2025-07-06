// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type DeleteStickerFromSet = {
  /**
   * File identifier of the sticker
   */
  sticker?: string;
};

/**
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 */
export const deleteStickerFromSet = botMethod<DeleteStickerFromSet, boolean>(
  'deleteStickerFromSet'
);

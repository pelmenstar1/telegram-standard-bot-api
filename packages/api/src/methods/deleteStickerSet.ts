// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type DeleteStickerSet = {
  /**
   * Sticker set name
   */
  name?: string;
};

/**
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 */
export const deleteStickerSet = botMethod<DeleteStickerSet, boolean>(
  'deleteStickerSet'
);

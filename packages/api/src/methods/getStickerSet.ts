// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { StickerSet } from '../types';

export type GetStickerSet = {
  /**
   * Name of the sticker set
   */
  name?: string;
};

/**
 * Use this method to get a sticker set. On success, a {@link StickerSet} object is returned.
 */
export const getStickerSet = botMethod<GetStickerSet, StickerSet>(
  'getStickerSet'
);

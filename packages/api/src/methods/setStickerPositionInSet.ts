// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetStickerPositionInSet = {
  /**
   * File identifier of the sticker
   */
  sticker?: string;

  /**
   * New sticker position in the set, zero-based
   */
  position?: number;
};

/**
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 */
export const setStickerPositionInSet = botMethod<
  SetStickerPositionInSet,
  boolean
>('setStickerPositionInSet');

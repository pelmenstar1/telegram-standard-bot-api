// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { MaskPosition } from '../types';

export type SetStickerMaskPosition = {
  /**
   * File identifier of the sticker
   */
  sticker?: string;

  /**
   * A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
   */
  mask_position: MaskPosition;
};

/**
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 */
export const setStickerMaskPosition = botMethod<
  SetStickerMaskPosition,
  boolean
>('setStickerMaskPosition');

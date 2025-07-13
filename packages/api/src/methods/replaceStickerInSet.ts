// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InputSticker } from '../types.js';

export type ReplaceStickerInSet = {
  /**
   * User identifier of the sticker set owner
   */
  user_id: number;

  /**
   * Sticker set name
   */
  name: string;

  /**
   * File identifier of the replaced sticker
   */
  old_sticker: string;

  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
   */
  sticker: InputSticker;
};

/**
 * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 */
export const replaceStickerInSet = /* @__PURE__ */ botMethod<
  ReplaceStickerInSet,
  boolean
>('replaceStickerInSet');

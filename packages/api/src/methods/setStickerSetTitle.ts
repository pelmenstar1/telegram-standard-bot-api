// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetStickerSetTitle = {
  /**
   * Sticker set name
   */
  name?: string;

  /**
   * Sticker set title, 1-64 characters
   */
  title?: string;
};

/**
 * Use this method to set the title of a created sticker set. Returns True on success.
 */
export const setStickerSetTitle = botMethod<SetStickerSetTitle, boolean>(
  'setStickerSetTitle'
);

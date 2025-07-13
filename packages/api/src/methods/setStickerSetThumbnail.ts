// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { formDataPayloadTransformer } from '../payload.js';
import { InputFile } from '../types.js';

export type SetStickerSetThumbnail = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * User identifier of the sticker set owner
   */
  user_id: number;

  /**
   * A.WEBP or.PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a.TGS animation with a thumbnail up to 32 kilobytes in size (see {@link https://core.telegram.org/stickers#animation-requirements | }https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a.WEBM video with the thumbnail up to 32 kilobytes in size; see {@link https://core.telegram.org/stickers#video-requirements | }https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
   */
  thumbnail?: InputFile | string;

  /**
   * Format of the thumbnail, must be one of “static” for a.WEBP or.PNG image, “animated” for a.TGS animation, or “video” for a.WEBM video
   */
  format: 'static' | 'animated' | 'video';
};

/**
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
 */
export const setStickerSetThumbnail = /* @__PURE__ */ botMethod<
  SetStickerSetThumbnail,
  boolean
>('setStickerSetThumbnail', formDataPayloadTransformer);

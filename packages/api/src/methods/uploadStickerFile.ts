// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { formDataPayloadTransformer } from '../payload.js';
import { File, InputFile } from '../types.js';

export type UploadStickerFile = {
  /**
   * User identifier of sticker file owner
   */
  user_id?: number;

  /**
   * A file with the sticker in.WEBP,.PNG,.TGS, or.WEBM format. See {@link https://core.telegram.org/stickers | } https://core.telegram.org/stickers for technical requirements. More information on Sending Files »
   */
  sticker?: InputFile;

  /**
   * Format of the sticker, must be one of “static”, “animated”, “video”
   */
  sticker_format?: string;
};

/**
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded {@link File} on success.
 */
export const uploadStickerFile = /* @__PURE__ */ botMethod<
  UploadStickerFile,
  File
>('uploadStickerFile', formDataPayloadTransformer);

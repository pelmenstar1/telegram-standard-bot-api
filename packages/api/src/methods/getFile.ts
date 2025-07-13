// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { File } from '../types.js';

export type GetFile = {
  /**
   * File identifier to get information about
   */
  file_id: string;
};

/**
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a {@link File} object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 */
export const getFile = /* @__PURE__ */ botMethod<GetFile, File>('getFile');

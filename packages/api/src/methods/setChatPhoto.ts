// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { formDataPayloadTransformer } from '../payload.js';
import { InputFile } from '../types.js';

export type SetChatPhoto = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * New chat photo, uploaded using multipart/form-data
   */
  photo: InputFile;
};

/**
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const setChatPhoto = /* @__PURE__ */ botMethod<SetChatPhoto, boolean>(
  'setChatPhoto',
  formDataPayloadTransformer
);

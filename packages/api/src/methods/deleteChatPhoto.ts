// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type DeleteChatPhoto = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const deleteChatPhoto = botMethod<DeleteChatPhoto, boolean>(
  'deleteChatPhoto'
);

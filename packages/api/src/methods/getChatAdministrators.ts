// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatMember } from '../types';

export type GetChatAdministrators = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
 */
export const getChatAdministrators = botMethod<
  GetChatAdministrators,
  ChatMember
>('getChatAdministrators');

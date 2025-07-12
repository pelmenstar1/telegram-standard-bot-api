// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatMember } from '../types';

export type GetChatMember = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id?: number;
};

/**
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a {@link ChatMember} object on success.
 */
export const getChatMember = botMethod<GetChatMember, ChatMember>(
  'getChatMember'
);

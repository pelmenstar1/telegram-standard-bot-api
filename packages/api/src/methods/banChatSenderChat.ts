// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type BanChatSenderChat = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target sender chat
   */
  sender_chat_id?: number;
};

/**
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const banChatSenderChat = botMethod<BanChatSenderChat, boolean>(
  'banChatSenderChat'
);

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type UnbanChatSenderChat = {
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
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const unbanChatSenderChat = /* @__PURE__ */ botMethod<
  UnbanChatSenderChat,
  boolean
>('unbanChatSenderChat');

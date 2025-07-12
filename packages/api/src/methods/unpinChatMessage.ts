// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type UnpinChatMessage = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be unpinned
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
   */
  message_id: number;
};

/**
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const unpinChatMessage = /* @__PURE__ */ botMethod<
  UnpinChatMessage,
  boolean
>('unpinChatMessage');

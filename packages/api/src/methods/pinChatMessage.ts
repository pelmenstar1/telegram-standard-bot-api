// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type PinChatMessage = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be pinned
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Identifier of a message to pin
   */
  message_id?: number;

  /**
   * Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
   */
  disable_notification: boolean;
};

/**
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const pinChatMessage = botMethod<PinChatMessage, boolean>(
  'pinChatMessage'
);

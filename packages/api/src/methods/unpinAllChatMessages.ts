// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type UnpinAllChatMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const unpinAllChatMessages = /* @__PURE__ */ botMethod<
  UnpinAllChatMessages,
  boolean
>('unpinAllChatMessages');

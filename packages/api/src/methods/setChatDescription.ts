// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetChatDescription = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * New chat description, 0-255 characters
   */
  description: string;
};

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const setChatDescription = /* @__PURE__ */ botMethod<
  SetChatDescription,
  boolean
>('setChatDescription');

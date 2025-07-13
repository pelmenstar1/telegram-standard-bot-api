// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { MenuButton } from '../types.js';

export type GetChatMenuButton = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
   */
  chat_id?: number;
};

/**
 * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns {@link MenuButton} on success.
 */
export const getChatMenuButton = /* @__PURE__ */ botMethod<
  GetChatMenuButton,
  MenuButton
>('getChatMenuButton');

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { MenuButton } from '../types.js';

export type SetChatMenuButton = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
   */
  chat_id: number;

  /**
   * A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
   */
  menu_button: MenuButton;
};

/**
 * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
 */
export const setChatMenuButton = /* @__PURE__ */ botMethod<
  SetChatMenuButton,
  boolean
>('setChatMenuButton');

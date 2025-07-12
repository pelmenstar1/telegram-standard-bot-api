// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetMyDescription = {
  /**
   * New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
   */
  description: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
   */
  language_code: string;
};

/**
 * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 */
export const setMyDescription = /* @__PURE__ */ botMethod<
  SetMyDescription,
  boolean
>('setMyDescription');

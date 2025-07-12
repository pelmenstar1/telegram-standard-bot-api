// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetMyShortDescription = {
  /**
   * New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
   */
  short_description: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
   */
  language_code: string;
};

/**
 * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
 */
export const setMyShortDescription = /* @__PURE__ */ botMethod<
  SetMyShortDescription,
  boolean
>('setMyShortDescription');

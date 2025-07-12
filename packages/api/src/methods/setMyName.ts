// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type SetMyName = {
  /**
   * New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
   */
  name: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
   */
  language_code: string;
};

/**
 * Use this method to change the bot's name. Returns True on success.
 */
export const setMyName = /* @__PURE__ */ botMethod<SetMyName, boolean>(
  'setMyName'
);

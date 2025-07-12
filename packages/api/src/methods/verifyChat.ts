// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type VerifyChat = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description: string;
};

/**
 * Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
 */
export const verifyChat = /* @__PURE__ */ botMethod<VerifyChat, boolean>(
  'verifyChat'
);

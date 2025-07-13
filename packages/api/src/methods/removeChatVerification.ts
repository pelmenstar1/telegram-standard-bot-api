// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type RemoveChatVerification = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
 */
export const removeChatVerification = /* @__PURE__ */ botMethod<
  RemoveChatVerification,
  boolean
>('removeChatVerification');

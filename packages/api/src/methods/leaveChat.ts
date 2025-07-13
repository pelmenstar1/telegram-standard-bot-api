// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type LeaveChat = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 */
export const leaveChat = /* @__PURE__ */ botMethod<LeaveChat, boolean>(
  'leaveChat'
);

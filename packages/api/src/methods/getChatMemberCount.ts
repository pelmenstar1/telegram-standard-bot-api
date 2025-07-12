// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type GetChatMemberCount = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 */
export const getChatMemberCount = /* @__PURE__ */ botMethod<
  GetChatMemberCount,
  number
>('getChatMemberCount');

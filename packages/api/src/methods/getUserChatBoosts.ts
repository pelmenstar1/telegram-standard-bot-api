// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { UserChatBoosts } from '../types.js';

export type GetUserChatBoosts = {
  /**
   * Unique identifier for the chat or username of the channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id?: number;
};

/**
 * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a {@link UserChatBoosts} object.
 */
export const getUserChatBoosts = /* @__PURE__ */ botMethod<
  GetUserChatBoosts,
  UserChatBoosts
>('getUserChatBoosts');

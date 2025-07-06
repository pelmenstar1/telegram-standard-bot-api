// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type DeclineChatJoinRequest = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id?: number;
};

/**
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
 */
export const declineChatJoinRequest = botMethod<
  DeclineChatJoinRequest,
  boolean
>('declineChatJoinRequest');

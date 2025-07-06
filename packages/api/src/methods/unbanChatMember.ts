// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type UnbanChatMember = {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id?: number;

  /**
   * Do nothing if the user is not banned
   */
  only_if_banned: boolean;
};

/**
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
 */
export const unbanChatMember = botMethod<UnbanChatMember, boolean>(
  'unbanChatMember'
);

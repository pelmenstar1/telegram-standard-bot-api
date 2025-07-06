// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatInviteLink } from '../types';

export type CreateChatSubscriptionInviteLink = {
  /**
   * Unique identifier for the target channel chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Invite link name; 0-32 characters
   */
  name: string;

  /**
   * The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
   */
  subscription_period?: number;

  /**
   * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
   */
  subscription_price?: number;
};

/**
 * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
 */
export const createChatSubscriptionInviteLink = botMethod<
  CreateChatSubscriptionInviteLink,
  ChatInviteLink
>('createChatSubscriptionInviteLink');

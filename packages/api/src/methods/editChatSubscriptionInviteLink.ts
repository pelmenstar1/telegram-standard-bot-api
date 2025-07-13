// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatInviteLink } from '../types.js';

export type EditChatSubscriptionInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * The invite link to edit
   */
  invite_link: string;

  /**
   * Invite link name; 0-32 characters
   */
  name?: string;
};

/**
 * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a {@link ChatInviteLink} object.
 */
export const editChatSubscriptionInviteLink = /* @__PURE__ */ botMethod<
  EditChatSubscriptionInviteLink,
  ChatInviteLink
>('editChatSubscriptionInviteLink');

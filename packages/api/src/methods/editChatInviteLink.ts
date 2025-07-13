// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatInviteLink } from '../types.js';

export type EditChatInviteLink = {
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

  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   */
  creates_join_request?: boolean;
};

/**
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a {@link ChatInviteLink} object.
 */
export const editChatInviteLink = /* @__PURE__ */ botMethod<
  EditChatInviteLink,
  ChatInviteLink
>('editChatInviteLink');

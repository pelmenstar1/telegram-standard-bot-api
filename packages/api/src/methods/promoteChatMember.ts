// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type PromoteChatMember = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Pass True if the administrator's presence in the chat is hidden
   */
  is_anonymous?: boolean;

  /**
   * Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   */
  can_manage_chat?: boolean;

  /**
   * Pass True if the administrator can delete messages of other users
   */
  can_delete_messages?: boolean;

  /**
   * Pass True if the administrator can manage video chats
   */
  can_manage_video_chats?: boolean;

  /**
   * Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members?: boolean;

  /**
   * Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
   */
  can_promote_members?: boolean;

  /**
   * Pass True if the administrator can change chat title, photo and other settings
   */
  can_change_info?: boolean;

  /**
   * Pass True if the administrator can invite new users to the chat
   */
  can_invite_users?: boolean;

  /**
   * Pass True if the administrator can post stories to the chat
   */
  can_post_stories?: boolean;

  /**
   * Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories?: boolean;

  /**
   * Pass True if the administrator can delete stories posted by other users
   */
  can_delete_stories?: boolean;

  /**
   * Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   */
  can_post_messages?: boolean;

  /**
   * Pass True if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean;

  /**
   * Pass True if the administrator can pin messages; for supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean;
};

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 */
export const promoteChatMember = /* @__PURE__ */ botMethod<
  PromoteChatMember,
  boolean
>('promoteChatMember');

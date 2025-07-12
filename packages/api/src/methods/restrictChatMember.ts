// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatPermissions } from '../types.js';

export type RestrictChatMember = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id?: number;

  /**
   * A JSON-serialized object for new user permissions
   */
  permissions?: ChatPermissions;

  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions: boolean;

  /**
   * Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   */
  until_date: number;
};

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 */
export const restrictChatMember = /* @__PURE__ */ botMethod<
  RestrictChatMember,
  boolean
>('restrictChatMember');

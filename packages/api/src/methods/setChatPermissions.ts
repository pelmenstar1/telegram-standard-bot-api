// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatPermissions } from '../types';

export type SetChatPermissions = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;

  /**
   * A JSON-serialized object for new default chat permissions
   */
  permissions?: ChatPermissions;

  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions: boolean;
};

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
 */
export const setChatPermissions = botMethod<SetChatPermissions, boolean>(
  'setChatPermissions'
);

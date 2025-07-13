// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type ExportChatInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
 */
export const exportChatInviteLink = /* @__PURE__ */ botMethod<
  ExportChatInviteLink,
  string
>('exportChatInviteLink');

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatInviteLink } from '../types.js';

export type RevokeChatInviteLink = {
  /**
   * Unique identifier of the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * The invite link to revoke
   */
  invite_link: string;
};

/**
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as {@link ChatInviteLink} object.
 */
export const revokeChatInviteLink = /* @__PURE__ */ botMethod<
  RevokeChatInviteLink,
  ChatInviteLink
>('revokeChatInviteLink');

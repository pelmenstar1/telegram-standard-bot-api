// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type UnpinAllGeneralForumTopicMessages = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 */
export const unpinAllGeneralForumTopicMessages = /* @__PURE__ */ botMethod<
  UnpinAllGeneralForumTopicMessages,
  boolean
>('unpinAllGeneralForumTopicMessages');

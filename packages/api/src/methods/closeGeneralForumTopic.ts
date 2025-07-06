// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type CloseGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 */
export const closeGeneralForumTopic = botMethod<
  CloseGeneralForumTopic,
  boolean
>('closeGeneralForumTopic');

// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type ReopenGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
 */
export const reopenGeneralForumTopic = botMethod<
  ReopenGeneralForumTopic,
  boolean
>('reopenGeneralForumTopic');

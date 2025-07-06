// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type ReopenForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id?: number;
};

/**
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 */
export const reopenForumTopic = botMethod<ReopenForumTopic, boolean>(
  'reopenForumTopic'
);

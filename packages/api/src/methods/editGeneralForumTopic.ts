// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type EditGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername )
   */
  chat_id?: number | string;

  /**
   * New topic name, 1-128 characters
   */
  name?: string;
};

/**
 * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 */
export const editGeneralForumTopic = botMethod<EditGeneralForumTopic, boolean>(
  'editGeneralForumTopic'
);

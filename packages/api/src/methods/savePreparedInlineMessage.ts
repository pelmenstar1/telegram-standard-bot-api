// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineQueryResult, PreparedInlineMessage } from '../types';

export type SavePreparedInlineMessage = {
  /**
   * Unique identifier of the target user that can use the prepared message
   */
  user_id?: number;

  /**
   * A JSON-serialized object describing the message to be sent
   */
  result?: InlineQueryResult;

  /**
   * Pass True if the message can be sent to private chats with users
   */
  allow_user_chats: boolean;

  /**
   * Pass True if the message can be sent to private chats with bots
   */
  allow_bot_chats: boolean;

  /**
   * Pass True if the message can be sent to group and supergroup chats
   */
  allow_group_chats: boolean;

  /**
   * Pass True if the message can be sent to channel chats
   */
  allow_channel_chats: boolean;
};

/**
 * Stores a message that can be sent by a user of a Mini App. Returns a {@link PreparedInlineMessage} object.
 */
export const savePreparedInlineMessage = botMethod<
  SavePreparedInlineMessage,
  PreparedInlineMessage
>('savePreparedInlineMessage');

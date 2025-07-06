// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { MessageId } from '../types';

export type ForwardMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id: number;

  /**
   * Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername )
   */
  from_chat_id?: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
   */
  message_ids?: number[];

  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification: boolean;

  /**
   * Protects the contents of the forwarded messages from forwarding and saving
   */
  protect_content: boolean;
};

/**
 * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
 */
export const forwardMessages = botMethod<ForwardMessages, MessageId>(
  'forwardMessages'
);

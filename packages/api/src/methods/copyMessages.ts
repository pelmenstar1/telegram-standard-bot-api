// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { MessageId } from '../types';

export type CopyMessages = {
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
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
   */
  message_ids?: number[];

  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification: boolean;

  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protect_content: boolean;

  /**
   * Pass True to copy the messages without their captions
   */
  remove_caption: boolean;
};

/**
 * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
 */
export const copyMessages = botMethod<CopyMessages, MessageId>('copyMessages');

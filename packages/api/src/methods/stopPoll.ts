// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineKeyboardMarkup, Poll } from '../types';

export type StopPoll = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Identifier of the original message with the poll
   */
  message_id?: number;

  /**
   * A JSON-serialized object for a new message {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
 */
export const stopPoll = botMethod<StopPoll, Poll>('stopPoll');

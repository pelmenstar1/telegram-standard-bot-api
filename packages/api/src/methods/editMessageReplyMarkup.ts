// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InlineKeyboardMarkup, Message } from '../types.js';

export type EditMessageReplyMarkup = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageReplyMarkup = /* @__PURE__ */ botMethod<
  EditMessageReplyMarkup,
  Message | true
>('editMessageReplyMarkup');

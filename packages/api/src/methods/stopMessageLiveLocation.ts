// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InlineKeyboardMarkup, Message } from '../types.js';

export type StopMessageLiveLocation = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message with live location to stop
   */
  message_id: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id: string;

  /**
   * A JSON-serialized object for a new {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited {@link Message} is returned, otherwise True is returned.
 */
export const stopMessageLiveLocation = /* @__PURE__ */ botMethod<
  StopMessageLiveLocation,
  Message | true
>('stopMessageLiveLocation');

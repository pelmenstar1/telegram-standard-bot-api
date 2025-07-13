// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import {
  InlineKeyboardMarkup,
  LinkPreviewOptions,
  Message,
  MessageEntity,
} from '../types.js';

export type EditMessageText = {
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
   * New text of the message, 1-4096 characters after entities parsing
   */
  text: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Link preview generation options for the message
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageText = /* @__PURE__ */ botMethod<
  EditMessageText,
  Message | true
>('editMessageText');

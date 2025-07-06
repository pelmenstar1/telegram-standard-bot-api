// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineKeyboardMarkup, Message, MessageEntity } from '../types';

export type EditMessageCaption = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id: string;

  /**
   * New caption of the message, 0-1024 characters after entities parsing
   */
  caption: string;

  /**
   * Mode for parsing entities in the message caption. See formatting options for more details.
   */
  parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
   */
  show_caption_above_media: boolean;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageCaption = botMethod<EditMessageCaption, Message | true>(
  'editMessageCaption'
);

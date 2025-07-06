// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { MessageEntity } from '../types';

export type SendGift = {
  /**
   * Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.
   */
  user_id: number;

  /**
   * Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername ) that will receive the gift.
   */
  chat_id: number | string;

  /**
   * Identifier of the gift
   */
  gift_id?: string;

  /**
   * Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver
   */
  pay_for_upgrade: boolean;

  /**
   * Text that will be shown along with the gift; 0-128 characters
   */
  text: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_entities: MessageEntity[];
};

/**
 * Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.
 */
export const sendGift = botMethod<SendGift, boolean>('sendGift');

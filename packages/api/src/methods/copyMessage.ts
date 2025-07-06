// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  ForceReply,
  InlineKeyboardMarkup,
  MessageEntity,
  MessageId,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type CopyMessage = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id: number;

  /**
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername )
   */
  from_chat_id?: number | string;

  /**
   * Message identifier in the chat specified in from_chat_id
   */
  message_id?: number;

  /**
   * New start timestamp for the copied video in the message
   */
  video_start_timestamp: number;

  /**
   * New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
   */
  caption: string;

  /**
   * Mode for parsing entities in the new caption. See formatting options for more details.
   */
  parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
   */
  caption_entities: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
   */
  show_caption_above_media: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast: boolean;

  /**
   * Description of the message to reply to
   */
  reply_parameters: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
 */
export const copyMessage = botMethod<CopyMessage, MessageId>('copyMessage');

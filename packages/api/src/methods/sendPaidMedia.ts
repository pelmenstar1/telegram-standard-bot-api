// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  ForceReply,
  InlineKeyboardMarkup,
  InputPaidMedia,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendPaidMedia = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername ). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
   */
  chat_id?: number | string;

  /**
   * The number of Telegram Stars that must be paid to buy access to the media; 1-10000
   */
  star_count?: number;

  /**
   * A JSON-serialized array describing the media to be sent; up to 10 items
   */
  media?: InputPaidMedia[];

  /**
   * Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;

  /**
   * Media caption, 0-1024 characters after entities parsing
   */
  caption: string;

  /**
   * Mode for parsing entities in the media caption. See formatting options for more details.
   */
  parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
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
 * Use this method to send paid media. On success, the sent Message is returned.
 */
export const sendPaidMedia = botMethod<SendPaidMedia, Message>('sendPaidMedia');

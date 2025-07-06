// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { formDataPayloadTransformer } from '../payload';
import {
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendPhoto = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id: number;

  /**
   * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
   */
  photo?: InputFile | string;

  /**
   * Photo caption (may also be used when resending photos by file_id ), 0-1024 characters after entities parsing
   */
  caption: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
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
   * Pass True if the photo needs to be covered with a spoiler animation
   */
  has_spoiler: boolean;

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
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id: string;

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
 * Use this method to send photos. On success, the sent Message is returned.
 */
export const sendPhoto = botMethod<SendPhoto, Message>(
  'sendPhoto',
  formDataPayloadTransformer
);

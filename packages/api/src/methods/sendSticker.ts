// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { formDataPayloadTransformer } from '../payload';
import {
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendSticker = {
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
   * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a.WEBP sticker from the Internet, or upload a new.WEBP,.TGS, or.WEBM sticker using multipart/form-data. More information on Sending Files ». {@link Video} and animated stickers can't be sent via an HTTP URL.
   */
  sticker?: InputFile | string;

  /**
   * Emoji associated with the sticker; only for just uploaded stickers
   */
  emoji: string;

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
 * Use this method to send static.WEBP, animated.TGS, or video.WEBM stickers. On success, the sent {@link Message} is returned.
 */
export const sendSticker = botMethod<SendSticker, Message>(
  'sendSticker',
  formDataPayloadTransformer
);

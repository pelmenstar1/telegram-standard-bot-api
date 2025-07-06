// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  ForceReply,
  InlineKeyboardMarkup,
  LinkPreviewOptions,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendMessage = {
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
   * Text of the message to be sent, 1-4096 characters after entities parsing
   */
  text?: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities: MessageEntity[];

  /**
   * Link preview generation options for the message
   */
  link_preview_options: LinkPreviewOptions;

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
 * Use this method to send text messages. On success, the sent Message is returned.
 */
export const sendMessage = botMethod<SendMessage, Message>('sendMessage');

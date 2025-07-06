// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  ForceReply,
  InlineKeyboardMarkup,
  InputPollOption,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendPoll = {
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
   * Poll question, 1-300 characters
   */
  question?: string;

  /**
   * Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
   */
  question_parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
   */
  question_entities: MessageEntity[];

  /**
   * A JSON-serialized list of 2-12 answer options
   */
  options?: InputPollOption[];

  /**
   * True, if the poll needs to be anonymous, defaults to True
   */
  is_anonymous: boolean;

  /**
   * Poll type, “quiz” or “regular”, defaults to “regular”
   */
  type: string;

  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   */
  allows_multiple_answers: boolean;

  /**
   * 0-based identifier of the correct answer option, required for polls in quiz mode
   */
  correct_option_id: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   */
  explanation: string;

  /**
   * Mode for parsing entities in the explanation. See formatting options for more details.
   */
  explanation_parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
   */
  explanation_entities: MessageEntity[];

  /**
   * Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   */
  open_period: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   */
  close_date: number;

  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
   */
  is_closed: boolean;

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
 * Use this method to send a native poll. On success, the sent Message is returned.
 */
export const sendPoll = botMethod<SendPoll, Message>('sendPoll');

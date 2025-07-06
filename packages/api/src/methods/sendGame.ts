// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineKeyboardMarkup, Message, ReplyParameters } from '../types';

export type SendGame = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id: number;

  /**
   * Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
   */
  game_short_name?: string;

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
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to send a game. On success, the sent Message is returned.
 */
export const sendGame = botMethod<SendGame, Message>('sendGame');

// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  ForceReply,
  InlineKeyboardMarkup,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
} from '../types';

export type SendLocation = {
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
   * Latitude of the location
   */
  latitude?: number;

  /**
   * Longitude of the location
   */
  longitude?: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy: number;

  /**
   * Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period: number;

  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading: number;

  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius: number;

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
 * Use this method to send point on the map. On success, the sent Message is returned.
 */
export const sendLocation = botMethod<SendLocation, Message>('sendLocation');

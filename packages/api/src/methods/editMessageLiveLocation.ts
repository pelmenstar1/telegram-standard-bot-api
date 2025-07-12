// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineKeyboardMarkup, Message } from '../types';

export type EditMessageLiveLocation = {
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
   * Latitude of new location
   */
  latitude?: number;

  /**
   * Longitude of new location
   */
  longitude?: number;

  /**
   * New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged
   */
  live_period: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy: number;

  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading: number;

  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius: number;

  /**
   * A JSON-serialized object for a new {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned.
 */
export const editMessageLiveLocation = botMethod<
  EditMessageLiveLocation,
  Message | true
>('editMessageLiveLocation');

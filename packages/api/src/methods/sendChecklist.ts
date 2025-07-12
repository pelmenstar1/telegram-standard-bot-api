// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  InlineKeyboardMarkup,
  InputChecklist,
  Message,
  ReplyParameters,
} from '../types';

export type SendChecklist = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * A JSON-serialized object for the checklist to send
   */
  checklist?: InputChecklist;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content: boolean;

  /**
   * Unique identifier of the message effect to be added to the message
   */
  message_effect_id: string;

  /**
   * A JSON-serialized object for description of the message to reply to
   */
  reply_parameters: ReplyParameters;

  /**
   * A JSON-serialized object for an inline keyboard
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to send a checklist on behalf of a connected business account. On success, the sent {@link Message} is returned.
 */
export const sendChecklist = botMethod<SendChecklist, Message>('sendChecklist');

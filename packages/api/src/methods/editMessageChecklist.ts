// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InlineKeyboardMarkup, InputChecklist, Message } from '../types.js';

export type EditMessageChecklist = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * Unique identifier for the target message
   */
  message_id?: number;

  /**
   * A JSON-serialized object for the new checklist
   */
  checklist?: InputChecklist;

  /**
   * A JSON-serialized object for the new inline keyboard for the message
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to edit a checklist on behalf of a connected business account. On success, the edited {@link Message} is returned.
 */
export const editMessageChecklist = /* @__PURE__ */ botMethod<
  EditMessageChecklist,
  Message
>('editMessageChecklist');

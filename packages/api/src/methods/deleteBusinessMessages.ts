// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type DeleteBusinessMessages = {
  /**
   * Unique identifier of the business connection on behalf of which to delete the messages
   */
  business_connection_id: string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};

/**
 * Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.
 */
export const deleteBusinessMessages = /* @__PURE__ */ botMethod<
  DeleteBusinessMessages,
  boolean
>('deleteBusinessMessages');

// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type ReadBusinessMessage = {
  /**
   * Unique identifier of the business connection on behalf of which to read the message
   */
  business_connection_id?: string;

  /**
   * Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.
   */
  chat_id?: number;

  /**
   * Unique identifier of the message to mark as read
   */
  message_id?: number;
};

/**
 * Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success.
 */
export const readBusinessMessage = botMethod<ReadBusinessMessage, boolean>(
  'readBusinessMessage'
);

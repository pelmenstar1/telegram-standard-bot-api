// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type DeleteMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};

/**
 * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.
 */
export const deleteMessages = /* @__PURE__ */ botMethod<
  DeleteMessages,
  boolean
>('deleteMessages');

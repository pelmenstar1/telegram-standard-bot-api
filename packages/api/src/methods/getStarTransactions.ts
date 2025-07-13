// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type GetStarTransactions = {
  /**
   * Number of transactions to skip in the response
   */
  offset?: number;

  /**
   * The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number;
};

/**
 * Returns the bot's Telegram Star transactions in chronological order. On success, returns a {@link StarTransactions} object.
 */
export const getStarTransactions = /* @__PURE__ */ botMethod<
  GetStarTransactions,
  boolean
>('getStarTransactions');

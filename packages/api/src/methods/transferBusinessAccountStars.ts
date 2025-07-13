// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type TransferBusinessAccountStars = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Number of Telegram Stars to transfer; 1-10000
   */
  star_count: number;
};

/**
 * Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success.
 */
export const transferBusinessAccountStars = /* @__PURE__ */ botMethod<
  TransferBusinessAccountStars,
  boolean
>('transferBusinessAccountStars');

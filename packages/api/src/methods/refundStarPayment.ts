// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type RefundStarPayment = {
  /**
   * Identifier of the user whose payment will be refunded
   */
  user_id?: number;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id?: string;
};

/**
 * Refunds a successful payment in Telegram Stars. Returns True on success.
 */
export const refundStarPayment = /* @__PURE__ */ botMethod<
  RefundStarPayment,
  boolean
>('refundStarPayment');

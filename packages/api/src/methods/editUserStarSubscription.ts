// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type EditUserStarSubscription = {
  /**
   * Identifier of the user whose subscription will be edited
   */
  user_id?: number;

  /**
   * Telegram payment identifier for the subscription
   */
  telegram_payment_charge_id?: string;

  /**
   * Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
   */
  is_canceled?: boolean;
};

/**
 * Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
 */
export const editUserStarSubscription = botMethod<
  EditUserStarSubscription,
  boolean
>('editUserStarSubscription');

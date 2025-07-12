// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type TransferGift = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Unique identifier of the regular gift that should be transferred
   */
  owned_gift_id?: string;

  /**
   * Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.
   */
  new_owner_chat_id?: number;

  /**
   * The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required.
   */
  star_count: number;
};

/**
 * Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success.
 */
export const transferGift = botMethod<TransferGift, boolean>('transferGift');

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type UpgradeGift = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Unique identifier of the regular gift that should be upgraded to a unique one
   */
  owned_gift_id?: string;

  /**
   * Pass True to keep the original gift text, sender and receiver in the upgraded gift
   */
  keep_original_details: boolean;

  /**
   * The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed.
   */
  star_count: number;
};

/**
 * Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success.
 */
export const upgradeGift = /* @__PURE__ */ botMethod<UpgradeGift, boolean>(
  'upgradeGift'
);

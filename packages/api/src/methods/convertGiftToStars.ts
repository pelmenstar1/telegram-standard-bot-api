// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type ConvertGiftToStars = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Unique identifier of the regular gift that should be converted to Telegram Stars
   */
  owned_gift_id?: string;
};

/**
 * Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.
 */
export const convertGiftToStars = botMethod<ConvertGiftToStars, boolean>(
  'convertGiftToStars'
);

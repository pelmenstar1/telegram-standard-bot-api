// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type GetBusinessAccountStarBalance = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;
};

/**
 * Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.
 */
export const getBusinessAccountStarBalance = botMethod<
  GetBusinessAccountStarBalance,
  boolean
>('getBusinessAccountStarBalance');

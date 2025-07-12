// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { OwnedGifts } from '../types';

export type GetBusinessAccountGifts = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Pass True to exclude gifts that aren't saved to the account's profile page
   */
  exclude_unsaved: boolean;

  /**
   * Pass True to exclude gifts that are saved to the account's profile page
   */
  exclude_saved: boolean;

  /**
   * Pass True to exclude gifts that can be purchased an unlimited number of times
   */
  exclude_unlimited: boolean;

  /**
   * Pass True to exclude gifts that can be purchased a limited number of times
   */
  exclude_limited: boolean;

  /**
   * Pass True to exclude unique gifts
   */
  exclude_unique: boolean;

  /**
   * Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
   */
  sort_by_price: boolean;

  /**
   * Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
   */
  offset: string;

  /**
   * The maximum number of gifts to be returned; 1-100. Defaults to 100
   */
  limit: number;
};

/**
 * Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns {@link OwnedGifts} on success.
 */
export const getBusinessAccountGifts = botMethod<
  GetBusinessAccountGifts,
  OwnedGifts
>('getBusinessAccountGifts');

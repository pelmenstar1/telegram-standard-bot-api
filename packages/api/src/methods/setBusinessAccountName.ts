// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetBusinessAccountName = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * The new value of the first name for the business account; 1-64 characters
   */
  first_name?: string;

  /**
   * The new value of the last name for the business account; 0-64 characters
   */
  last_name: string;
};

/**
 * Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.
 */
export const setBusinessAccountName = botMethod<
  SetBusinessAccountName,
  boolean
>('setBusinessAccountName');

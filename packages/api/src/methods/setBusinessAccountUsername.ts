// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetBusinessAccountUsername = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * The new value of the username for the business account; 0-32 characters
   */
  username: string;
};

/**
 * Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success.
 */
export const setBusinessAccountUsername = botMethod<
  SetBusinessAccountUsername,
  boolean
>('setBusinessAccountUsername');

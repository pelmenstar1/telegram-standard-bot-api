// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetBusinessAccountBio = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * The new value of the bio for the business account; 0-140 characters
   */
  bio: string;
};

/**
 * Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success.
 */
export const setBusinessAccountBio = botMethod<SetBusinessAccountBio, boolean>(
  'setBusinessAccountBio'
);

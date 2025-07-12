// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type RemoveUserVerification = {
  /**
   * Unique identifier of the target user
   */
  user_id?: number;
};

/**
 * Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
 */
export const removeUserVerification = /* @__PURE__ */ botMethod<
  RemoveUserVerification,
  boolean
>('removeUserVerification');

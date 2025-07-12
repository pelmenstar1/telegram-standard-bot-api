// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type VerifyUser = {
  /**
   * Unique identifier of the target user
   */
  user_id?: number;

  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description: string;
};

/**
 * Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
 */
export const verifyUser = /* @__PURE__ */ botMethod<VerifyUser, boolean>(
  'verifyUser'
);

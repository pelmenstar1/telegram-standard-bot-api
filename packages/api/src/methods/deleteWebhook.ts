// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type DeleteWebhook = {
  /**
   * Pass True to drop all pending updates
   */
  drop_pending_updates?: boolean;
};

/**
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 */
export const deleteWebhook = /* @__PURE__ */ botMethod<DeleteWebhook, boolean>(
  'deleteWebhook'
);

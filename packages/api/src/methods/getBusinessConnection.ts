// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { BusinessConnection } from '../types.js';

export type GetBusinessConnection = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
};

/**
 * Use this method to get information about the connection of the bot with a business account. Returns a {@link BusinessConnection} object on success.
 */
export const getBusinessConnection = /* @__PURE__ */ botMethod<
  GetBusinessConnection,
  BusinessConnection
>('getBusinessConnection');

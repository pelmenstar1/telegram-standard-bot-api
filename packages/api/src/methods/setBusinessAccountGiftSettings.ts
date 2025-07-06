// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { AcceptedGiftTypes } from '../types';

export type SetBusinessAccountGiftSettings = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field
   */
  show_gift_button?: boolean;

  /**
   * Types of gifts accepted by the business account
   */
  accepted_gift_types?: AcceptedGiftTypes;
};

/**
 * Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success.
 */
export const setBusinessAccountGiftSettings = botMethod<
  SetBusinessAccountGiftSettings,
  boolean
>('setBusinessAccountGiftSettings');

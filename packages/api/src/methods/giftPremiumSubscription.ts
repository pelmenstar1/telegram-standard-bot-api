// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { MessageEntity } from '../types.js';

export type GiftPremiumSubscription = {
  /**
   * Unique identifier of the target user who will receive a Telegram Premium subscription
   */
  user_id: number;

  /**
   * Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12
   */
  month_count: 3 | 6 | 12;

  /**
   * Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months
   */
  star_count: number;

  /**
   * Text that will be shown along with the service message about the subscription; 0-128 characters
   */
  text?: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_parse_mode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_entities?: MessageEntity[];
};

/**
 * {@link Gifts} a Telegram Premium subscription to the given user. Returns True on success.
 */
export const giftPremiumSubscription = /* @__PURE__ */ botMethod<
  GiftPremiumSubscription,
  boolean
>('giftPremiumSubscription');

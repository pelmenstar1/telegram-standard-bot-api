// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ShippingOption } from '../types';

export type AnswerShippingQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  shipping_query_id?: string;

  /**
   * Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   */
  ok?: boolean;

  /**
   * Required if ok is True. A JSON-serialized array of available shipping options.
   */
  shipping_options: ShippingOption[];

  /**
   * Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.
   */
  error_message: string;
};

/**
 * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 */
export const answerShippingQuery = botMethod<AnswerShippingQuery, boolean>(
  'answerShippingQuery'
);

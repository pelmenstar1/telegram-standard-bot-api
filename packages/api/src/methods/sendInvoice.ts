// This file is generated. Do not edit it.

import { botMethod } from '../method';
import {
  InlineKeyboardMarkup,
  LabeledPrice,
  Message,
  ReplyParameters,
} from '../types';

export type SendInvoice = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id: number;

  /**
   * Product name, 1-32 characters
   */
  title?: string;

  /**
   * Product description, 1-255 characters
   */
  description?: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload?: string;

  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token: string;

  /**
   * Three-letter ISO 4217 currency code, see {@link https://core.telegram.org/bots/payments#supported-currencies | more on currencies}. Pass “XTR” for payments in Telegram Stars.
   */
  currency?: string;

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices?: LabeledPrice[];

  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount: number;

  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts: number[];

  /**
   * Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
   */
  start_parameter: string;

  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   */
  provider_data: string;

  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
   */
  photo_url: string;

  /**
   * Photo size in bytes
   */
  photo_size: number;

  /**
   * Photo width
   */
  photo_width: number;

  /**
   * Photo height
   */
  photo_height: number;

  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name: boolean;

  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number: boolean;

  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email: boolean;

  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address: boolean;

  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider: boolean;

  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider: boolean;

  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters: ReplyParameters;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}. If empty, one 'Pay total price ' button will be shown. If not empty, the first button must be a Pay button.
   */
  reply_markup: InlineKeyboardMarkup;
};

/**
 * Use this method to send invoices. On success, the sent Message is returned.
 */
export const sendInvoice = botMethod<SendInvoice, Message>('sendInvoice');

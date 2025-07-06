// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetUserEmojiStatus = {
  /**
   * Unique identifier of the target user
   */
  user_id?: number;

  /**
   * Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
   */
  emoji_status_custom_emoji_id: string;

  /**
   * Expiration date of the emoji status, if any
   */
  emoji_status_expiration_date: number;
};

/**
 * Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | requestEmojiStatusAccess}. Returns True on success.
 */
export const setUserEmojiStatus = botMethod<SetUserEmojiStatus, boolean>(
  'setUserEmojiStatus'
);

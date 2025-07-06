// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type SetGameScore = {
  /**
   * User identifier
   */
  user_id?: number;

  /**
   * New score, must be non-negative
   */
  score?: number;

  /**
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   */
  force: boolean;

  /**
   * Pass True if the game message should not be automatically edited to include the current scoreboard
   */
  disable_edit_message: boolean;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id: number;

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id: string;
};

/**
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
 */
export const setGameScore = botMethod<SetGameScore, boolean>('setGameScore');

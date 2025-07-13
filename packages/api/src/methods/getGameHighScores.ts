// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { GameHighScore } from '../types.js';

export type GetGameHighScores = {
  /**
   * Target user id
   */
  user_id: number;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
};

/**
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of {@link GameHighScore} objects. This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.
 */
export const getGameHighScores = /* @__PURE__ */ botMethod<
  GetGameHighScores,
  GameHighScore
>('getGameHighScores');

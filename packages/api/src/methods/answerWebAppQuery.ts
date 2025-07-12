// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InlineQueryResult, SentWebAppMessage } from '../types';

export type AnswerWebAppQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  web_app_query_id?: string;

  /**
   * A JSON-serialized object describing the message to be sent
   */
  result?: InlineQueryResult;
};

/**
 * Use this method to set the result of an interaction with a {@link https://core.telegram.org/bots/webapps | Web App} and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a {@link SentWebAppMessage} object is returned.
 */
export const answerWebAppQuery = botMethod<
  AnswerWebAppQuery,
  SentWebAppMessage
>('answerWebAppQuery');

// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InlineQueryResult, InlineQueryResultsButton } from '../types.js';

export type AnswerInlineQuery = {
  /**
   * Unique identifier for the answered query
   */
  inline_query_id?: string;

  /**
   * A JSON-serialized array of results for the inline query
   */
  results?: InlineQueryResult[];

  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   */
  cache_time: number;

  /**
   * Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
   */
  is_personal: boolean;

  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   */
  next_offset: string;

  /**
   * A JSON-serialized object describing a button to be shown above inline query results
   */
  button: InlineQueryResultsButton;
};

/**
 * Use this method to send answers to an inline query. On success, True is returned. No more than 50 results per query are allowed.
 */
export const answerInlineQuery = /* @__PURE__ */ botMethod<
  AnswerInlineQuery,
  boolean
>('answerInlineQuery');

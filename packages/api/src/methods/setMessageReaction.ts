// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ReactionType } from '../types';

export type SetMessageReaction = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername )
   */
  chat_id?: number | string;

  /**
   * Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
   */
  message_id?: number;

  /**
   * A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
   */
  reaction: ReactionType[];

  /**
   * Pass True to set the reaction with a big animation
   */
  is_big: boolean;
};

/**
 * Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
 */
export const setMessageReaction = botMethod<SetMessageReaction, boolean>(
  'setMessageReaction'
);

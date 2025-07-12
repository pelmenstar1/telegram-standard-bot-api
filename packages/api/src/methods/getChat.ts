// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatFullInfo } from '../types';

export type GetChat = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername )
   */
  chat_id?: number | string;
};

/**
 * Use this method to get up-to-date information about the chat. Returns a {@link ChatFullInfo} object on success.
 */
export const getChat = botMethod<GetChat, ChatFullInfo>('getChat');

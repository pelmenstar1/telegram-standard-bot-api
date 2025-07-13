// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatMember } from '../types.js';

export type GetChatAdministrators = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of {@link ChatMember} objects.
 */
export const getChatAdministrators = /* @__PURE__ */ botMethod<
  GetChatAdministrators,
  ChatMember
>('getChatAdministrators');

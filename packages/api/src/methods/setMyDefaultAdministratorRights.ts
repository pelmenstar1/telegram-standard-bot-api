// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { ChatAdministratorRights } from '../types.js';

export type SetMyDefaultAdministratorRights = {
  /**
   * A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
   */
  rights: ChatAdministratorRights;

  /**
   * Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
   */
  for_channels: boolean;
};

/**
 * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 */
export const setMyDefaultAdministratorRights = /* @__PURE__ */ botMethod<
  SetMyDefaultAdministratorRights,
  boolean
>('setMyDefaultAdministratorRights');

// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { ChatAdministratorRights } from '../types';

export type GetMyDefaultAdministratorRights = {
  /**
   * Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
   */
  for_channels: boolean;
};

/**
 * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
 */
export const getMyDefaultAdministratorRights = botMethod<
  GetMyDefaultAdministratorRights,
  ChatAdministratorRights
>('getMyDefaultAdministratorRights');

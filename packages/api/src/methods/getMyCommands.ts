// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { BotCommand, BotCommandScope } from '../types';

export type GetMyCommands = {
  /**
   * A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
   */
  scope: BotCommandScope;

  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code: string;
};

/**
 * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
 */
export const getMyCommands = botMethod<GetMyCommands, BotCommand>(
  'getMyCommands'
);

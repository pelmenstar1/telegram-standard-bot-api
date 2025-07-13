// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { BotCommand, BotCommandScope } from '../types.js';

export type SetMyCommands = {
  /**
   * A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   */
  commands: BotCommand[];

  /**
   * A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to {@link BotCommandScopeDefault}.
   */
  scope?: BotCommandScope;

  /**
   * A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   */
  language_code?: string;
};

/**
 * Use this method to change the list of the bot's commands. See {@link https://core.telegram.org/bots/features#commands | this manual} for more details about bot commands. Returns True on success.
 */
export const setMyCommands = /* @__PURE__ */ botMethod<SetMyCommands, boolean>(
  'setMyCommands'
);

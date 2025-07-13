// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { BotCommandScope } from '../types.js';

export type DeleteMyCommands = {
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
 * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
 */
export const deleteMyCommands = /* @__PURE__ */ botMethod<
  DeleteMyCommands,
  boolean
>('deleteMyCommands');

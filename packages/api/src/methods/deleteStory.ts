// This file is generated. Do not edit it.

import { botMethod } from '../method.js';

export type DeleteStory = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Unique identifier of the story to delete
   */
  story_id: number;
};

/**
 * Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success.
 */
export const deleteStory = /* @__PURE__ */ botMethod<DeleteStory, boolean>(
  'deleteStory'
);

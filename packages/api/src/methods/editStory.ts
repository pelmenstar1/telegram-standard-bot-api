// This file is generated. Do not edit it.

import { botMethod } from '../method';
import { InputStoryContent, MessageEntity, Story, StoryArea } from '../types';

export type EditStory = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Unique identifier of the story to edit
   */
  story_id?: number;

  /**
   * Content of the story
   */
  content?: InputStoryContent;

  /**
   * Caption of the story, 0-2048 characters after entities parsing
   */
  caption: string;

  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   */
  parse_mode: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities: MessageEntity[];

  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   */
  areas: StoryArea[];
};

/**
 * Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.
 */
export const editStory = botMethod<EditStory, Story>('editStory');

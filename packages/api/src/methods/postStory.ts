// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import {
  InputStoryContent,
  MessageEntity,
  Story,
  StoryArea,
} from '../types.js';

export type PostStory = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Content of the story
   */
  content: InputStoryContent;

  /**
   * Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400
   */
  active_period: 21_600 | 43_200 | 172_800;

  /**
   * Caption of the story, 0-2048 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   */
  areas?: StoryArea[];

  /**
   * Pass True to keep the story accessible after it expires
   */
  post_to_chat_page?: boolean;

  /**
   * Pass True if the content of the story must be protected from forwarding and screenshotting
   */
  protect_content?: boolean;
};

/**
 * Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns {@link Story} on success.
 */
export const postStory = /* @__PURE__ */ botMethod<PostStory, Story>(
  'postStory'
);

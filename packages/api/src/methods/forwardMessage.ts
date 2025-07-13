// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { Message } from '../types.js';

export type ForwardMessage = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;

  /**
   * New start timestamp for the forwarded video in the message
   */
  video_start_timestamp?: number;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the forwarded message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Message identifier in the chat specified in from_chat_id
   */
  message_id: number;
};

/**
 * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent {@link Message} is returned.
 */
export const forwardMessage = /* @__PURE__ */ botMethod<
  ForwardMessage,
  Message
>('forwardMessage');

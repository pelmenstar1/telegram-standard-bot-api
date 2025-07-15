// This file is generated. Do not edit it.

import { botMethod } from './method.js';
import { formDataPayloadTransformer } from './payload.js';
import {
  AcceptedGiftTypes,
  BotCommand,
  BotCommandScope,
  BotDescription,
  BotName,
  BotShortDescription,
  BusinessConnection,
  ChatAdministratorRights,
  ChatFullInfo,
  ChatInviteLink,
  ChatMember,
  ChatPermissions,
  File,
  ForceReply,
  ForumTopic,
  GameHighScore,
  Gifts,
  InlineKeyboardMarkup,
  InlineQueryResult,
  InlineQueryResultsButton,
  InputChecklist,
  InputFile,
  InputMedia,
  InputMediaAudio,
  InputPaidMedia,
  InputPollOption,
  InputProfilePhoto,
  InputSticker,
  InputStoryContent,
  LabeledPrice,
  LinkPreviewOptions,
  MaskPosition,
  MenuButton,
  Message,
  MessageEntity,
  MessageId,
  OwnedGifts,
  PassportElementError,
  Poll,
  PreparedInlineMessage,
  ReactionType,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  ReplyParameters,
  SentWebAppMessage,
  ShippingOption,
  StarAmount,
  Sticker,
  StickerSet,
  Story,
  StoryArea,
  Update,
  User,
  UserChatBoosts,
  UserProfilePhotos,
  WebhookInfo,
} from './types.js';

export type GetUpdates = {
  /**
   * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
   */
  offset?: number;

  /**
   * Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number;

  /**
   * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
   */
  timeout?: number;

  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See {@link Update} for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: Exclude<keyof Update, 'update_id'>[];
};

/**
 * Use this method to receive incoming updates using long polling (wiki). Returns an Array of {@link Update} objects.
 */
export const getUpdates =
  /* @__PURE__ */ botMethod<(payload?: GetUpdates) => Update[]>('getUpdates');

export type SetWebhook = {
  /**
   * HTTPS URL to send updates to. Use an empty string to remove webhook integration
   */
  url: string;

  /**
   * Upload your public key certificate so that the root certificate in use can be checked. See our {@link https://core.telegram.org/bots/self-signed | self-signed guide} for details.
   */
  certificate?: InputFile;

  /**
   * The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
   */
  ip_address?: string;

  /**
   * The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
   */
  max_connections?: number;

  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See {@link Update} for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: Exclude<keyof Update, 'update_id'>[];

  /**
   * Pass True to drop all pending updates
   */
  drop_pending_updates?: boolean;

  /**
   * A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
   */
  secret_token?: string;
};

/**
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized {@link Update}. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success. If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
 */
export const setWebhook = /* @__PURE__ */ botMethod<
  (payload: SetWebhook) => boolean
>('setWebhook', formDataPayloadTransformer);

export type DeleteWebhook = {
  /**
   * Pass True to drop all pending updates
   */
  drop_pending_updates?: boolean;
};

/**
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 */
export const deleteWebhook =
  /* @__PURE__ */ botMethod<(payload?: DeleteWebhook) => boolean>(
    'deleteWebhook'
  );

export const getWebhookInfo =
  /* @__PURE__ */ botMethod<() => WebhookInfo>('getWebhookInfo');

export const getMe = /* @__PURE__ */ botMethod<() => User>('getMe');

export const logOut = /* @__PURE__ */ botMethod<() => boolean>('logOut');

export const close = /* @__PURE__ */ botMethod<() => boolean>('close');

export type SendMessage = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Text of the message to be sent, 1-4096 characters after entities parsing
   */
  text: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Link preview generation options for the message
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send text messages. On success, the sent {@link Message} is returned.
 */
export const sendMessage =
  /* @__PURE__ */ botMethod<(payload: SendMessage) => Message>('sendMessage');

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
export const forwardMessage =
  /* @__PURE__ */ botMethod<(payload: ForwardMessage) => Message>(
    'forwardMessage'
  );

export type ForwardMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
   */
  message_ids: number[];

  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the forwarded messages from forwarding and saving
   */
  protect_content?: boolean;
};

/**
 * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of {@link MessageId} of the sent messages is returned.
 */
export const forwardMessages =
  /* @__PURE__ */ botMethod<(payload: ForwardMessages) => MessageId[]>(
    'forwardMessages'
  );

export type CopyMessage = {
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
   * Message identifier in the chat specified in from_chat_id
   */
  message_id: number;

  /**
   * New start timestamp for the copied video in the message
   */
  video_start_timestamp?: number;

  /**
   * New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
   */
  caption?: string;

  /**
   * Mode for parsing entities in the new caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
   */
  show_caption_above_media?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the {@link MessageId} of the sent message on success.
 */
export const copyMessage =
  /* @__PURE__ */ botMethod<(payload: CopyMessage) => MessageId>('copyMessage');

export type CopyMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
   */
  message_ids: number[];

  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to copy the messages without their captions
   */
  remove_caption?: boolean;
};

/**
 * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of {@link MessageId} of the sent messages is returned.
 */
export const copyMessages =
  /* @__PURE__ */ botMethod<(payload: CopyMessages) => MessageId[]>(
    'copyMessages'
  );

export type SendPhoto = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
   */
  photo: InputFile | string;

  /**
   * Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Pass True if the photo needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send photos. On success, the sent {@link Message} is returned.
 */
export const sendPhoto = /* @__PURE__ */ botMethod<
  (payload: SendPhoto) => Message
>('sendPhoto', formDataPayloadTransformer);

export type SendAudio = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
   */
  audio: InputFile | string;

  /**
   * Audio caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Duration of the audio in seconds
   */
  duration?: number;

  /**
   * Performer
   */
  performer?: string;

  /**
   * Track name
   */
  title?: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: InputFile | string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the.MP3 or.M4A format. On success, the sent {@link Message} is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future. For sending voice messages, use the sendVoice method instead.
 */
export const sendAudio = /* @__PURE__ */ botMethod<
  (payload: SendAudio) => Message
>('sendAudio', formDataPayloadTransformer);

export type SendDocument = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
   */
  document: InputFile | string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: InputFile | string;

  /**
   * Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Disables automatic server-side content type detection for files uploaded using multipart/form-data
   */
  disable_content_type_detection?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send general files. On success, the sent {@link Message} is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 */
export const sendDocument = /* @__PURE__ */ botMethod<
  (payload: SendDocument) => Message
>('sendDocument', formDataPayloadTransformer);

export type SendVideo = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
   */
  video: InputFile | string;

  /**
   * Duration of sent video in seconds
   */
  duration?: number;

  /**
   * Video width
   */
  width?: number;

  /**
   * Video height
   */
  height?: number;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: InputFile | string;

  /**
   * Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  cover?: InputFile | string;

  /**
   * Start timestamp for the video in the message
   */
  start_timestamp?: number;

  /**
   * Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Pass True if the video needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;

  /**
   * Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent {@link Message} is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 */
export const sendVideo = /* @__PURE__ */ botMethod<
  (payload: SendVideo) => Message
>('sendVideo', formDataPayloadTransformer);

export type SendAnimation = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
   */
  animation: InputFile | string;

  /**
   * Duration of sent animation in seconds
   */
  duration?: number;

  /**
   * Animation width
   */
  width?: number;

  /**
   * Animation height
   */
  height?: number;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: InputFile | string;

  /**
   * Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the animation caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Pass True if the animation needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent {@link Message} is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 */
export const sendAnimation = /* @__PURE__ */ botMethod<
  (payload: SendAnimation) => Message
>('sendAnimation', formDataPayloadTransformer);

export type SendVoice = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
   */
  voice: InputFile | string;

  /**
   * Voice message caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Duration of the voice message in seconds
   */
  duration?: number;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an.OGG file encoded with OPUS, or in.MP3 format, or in.M4A format (other formats may be sent as {@link Audio} or Document). On success, the sent {@link Message} is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 */
export const sendVoice = /* @__PURE__ */ botMethod<
  (payload: SendVoice) => Message
>('sendVoice', formDataPayloadTransformer);

export type SendVideoNote = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
   */
  video_note: InputFile | string;

  /**
   * Duration of sent video in seconds
   */
  duration?: number;

  /**
   * Video width and height, i.e. diameter of the video message
   */
  length?: number;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: InputFile | string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent {@link Message} is returned.
 */
export const sendVideoNote = /* @__PURE__ */ botMethod<
  (payload: SendVideoNote) => Message
>('sendVideoNote', formDataPayloadTransformer);

export type SendPaidMedia = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
   */
  chat_id: number | string;

  /**
   * The number of Telegram Stars that must be paid to buy access to the media; 1-10000
   */
  star_count: number;

  /**
   * A JSON-serialized array describing the media to be sent; up to 10 items
   */
  media: InputPaidMedia[];

  /**
   * Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload?: string;

  /**
   * Media caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the media caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send paid media. On success, the sent {@link Message} is returned.
 */
export const sendPaidMedia =
  /* @__PURE__ */ botMethod<(payload: SendPaidMedia) => Message>(
    'sendPaidMedia'
  );

export type SendMediaGroup = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * A JSON-serialized array describing messages to be sent, must include 2-10 items
   */
  media: InputMediaAudio[];

  /**
   * Sends messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;
};

/**
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
 */
export const sendMediaGroup =
  /* @__PURE__ */ botMethod<(payload: SendMediaGroup) => Message[]>(
    'sendMediaGroup'
  );

export type SendLocation = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Latitude of the location
   */
  latitude: number;

  /**
   * Longitude of the location
   */
  longitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period?: number;

  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;

  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send point on the map. On success, the sent {@link Message} is returned.
 */
export const sendLocation =
  /* @__PURE__ */ botMethod<(payload: SendLocation) => Message>('sendLocation');

export type SendVenue = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Latitude of the venue
   */
  latitude: number;

  /**
   * Longitude of the venue
   */
  longitude: number;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Foursquare identifier of the venue
   */
  foursquare_id?: string;

  /**
   * Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type?: string;

  /**
   * Google Places identifier of the venue
   */
  google_place_id?: string;

  /**
   * Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send information about a venue. On success, the sent {@link Message} is returned.
 */
export const sendVenue =
  /* @__PURE__ */ botMethod<(payload: SendVenue) => Message>('sendVenue');

export type SendContact = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Contact's phone number
   */
  phone_number: string;

  /**
   * Contact's first name
   */
  first_name: string;

  /**
   * Contact's last name
   */
  last_name?: string;

  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send phone contacts. On success, the sent {@link Message} is returned.
 */
export const sendContact =
  /* @__PURE__ */ botMethod<(payload: SendContact) => Message>('sendContact');

export type SendPoll = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Poll question, 1-300 characters
   */
  question: string;

  /**
   * Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
   */
  question_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
   */
  question_entities?: MessageEntity[];

  /**
   * A JSON-serialized list of 2-12 answer options
   */
  options: InputPollOption[];

  /**
   * True, if the poll needs to be anonymous, defaults to True
   */
  is_anonymous?: boolean;

  /**
   * Poll type, “quiz” or “regular”, defaults to “regular”
   */
  type?: string;

  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   */
  allows_multiple_answers?: boolean;

  /**
   * 0-based identifier of the correct answer option, required for polls in quiz mode
   */
  correct_option_id?: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   */
  explanation?: string;

  /**
   * Mode for parsing entities in the explanation. See formatting options for more details.
   */
  explanation_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
   */
  explanation_entities?: MessageEntity[];

  /**
   * Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   */
  open_period?: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   */
  close_date?: number;

  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
   */
  is_closed?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send a native poll. On success, the sent {@link Message} is returned.
 */
export const sendPoll =
  /* @__PURE__ */ botMethod<(payload: SendPoll) => Message>('sendPoll');

export type SendChecklist = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id: number;

  /**
   * A JSON-serialized object for the checklist to send
   */
  checklist: InputChecklist;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message
   */
  message_effect_id?: string;

  /**
   * A JSON-serialized object for description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * A JSON-serialized object for an inline keyboard
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to send a checklist on behalf of a connected business account. On success, the sent {@link Message} is returned.
 */
export const sendChecklist =
  /* @__PURE__ */ botMethod<(payload: SendChecklist) => Message>(
    'sendChecklist'
  );

export type SendDice = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. {@link Dice} can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”
   */
  emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎳' | '🎰';

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send an animated emoji that will display a random value. On success, the sent {@link Message} is returned.
 */
export const sendDice =
  /* @__PURE__ */ botMethod<(payload: SendDice) => Message>('sendDice');

export type SendChatAction = {
  /**
   * Unique identifier of the business connection on behalf of which the action will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread; for supergroups only
   */
  message_thread_id?: number;

  /**
   * Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
   */
  action: string;
};

/**
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success. Example: The ImageBot needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use sendChatAction with action = upload_photo. The user will see a “sending photo” status for the bot. We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
 */
export const sendChatAction =
  /* @__PURE__ */ botMethod<(payload: SendChatAction) => boolean>(
    'sendChatAction'
  );

export type SetMessageReaction = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
   */
  message_id: number;

  /**
   * A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
   */
  reaction?: ReactionType[];

  /**
   * Pass True to set the reaction with a big animation
   */
  is_big?: boolean;
};

/**
 * Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
 */
export const setMessageReaction =
  /* @__PURE__ */ botMethod<(payload: SetMessageReaction) => boolean>(
    'setMessageReaction'
  );

export type GetUserProfilePhotos = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Sequential number of the first photo to be returned. By default, all photos are returned.
   */
  offset?: number;

  /**
   * Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number;
};

/**
 * Use this method to get a list of profile pictures for a user. Returns a {@link UserProfilePhotos} object.
 */
export const getUserProfilePhotos = /* @__PURE__ */ botMethod<
  (payload: GetUserProfilePhotos) => UserProfilePhotos
>('getUserProfilePhotos');

export type SetUserEmojiStatus = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
   */
  emoji_status_custom_emoji_id?: string;

  /**
   * Expiration date of the emoji status, if any
   */
  emoji_status_expiration_date?: number;
};

/**
 * Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | requestEmojiStatusAccess}. Returns True on success.
 */
export const setUserEmojiStatus =
  /* @__PURE__ */ botMethod<(payload: SetUserEmojiStatus) => boolean>(
    'setUserEmojiStatus'
  );

export type GetFile = {
  /**
   * File identifier to get information about
   */
  file_id: string;
};

/**
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a {@link File} object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 */
export const getFile =
  /* @__PURE__ */ botMethod<(payload: GetFile) => File>('getFile');

export type BanChatMember = {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
   */
  until_date?: number;

  /**
   * Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
   */
  revoke_messages?: boolean;
};

/**
 * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const banChatMember =
  /* @__PURE__ */ botMethod<(payload: BanChatMember) => boolean>(
    'banChatMember'
  );

export type UnbanChatMember = {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Do nothing if the user is not banned
   */
  only_if_banned?: boolean;
};

/**
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
 */
export const unbanChatMember =
  /* @__PURE__ */ botMethod<(payload: UnbanChatMember) => boolean>(
    'unbanChatMember'
  );

export type RestrictChatMember = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * A JSON-serialized object for new user permissions
   */
  permissions: ChatPermissions;

  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions?: boolean;

  /**
   * Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   */
  until_date?: number;
};

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 */
export const restrictChatMember =
  /* @__PURE__ */ botMethod<(payload: RestrictChatMember) => boolean>(
    'restrictChatMember'
  );

export type PromoteChatMember = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Pass True if the administrator's presence in the chat is hidden
   */
  is_anonymous?: boolean;

  /**
   * Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   */
  can_manage_chat?: boolean;

  /**
   * Pass True if the administrator can delete messages of other users
   */
  can_delete_messages?: boolean;

  /**
   * Pass True if the administrator can manage video chats
   */
  can_manage_video_chats?: boolean;

  /**
   * Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members?: boolean;

  /**
   * Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
   */
  can_promote_members?: boolean;

  /**
   * Pass True if the administrator can change chat title, photo and other settings
   */
  can_change_info?: boolean;

  /**
   * Pass True if the administrator can invite new users to the chat
   */
  can_invite_users?: boolean;

  /**
   * Pass True if the administrator can post stories to the chat
   */
  can_post_stories?: boolean;

  /**
   * Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories?: boolean;

  /**
   * Pass True if the administrator can delete stories posted by other users
   */
  can_delete_stories?: boolean;

  /**
   * Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   */
  can_post_messages?: boolean;

  /**
   * Pass True if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean;

  /**
   * Pass True if the administrator can pin messages; for supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean;
};

/**
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 */
export const promoteChatMember =
  /* @__PURE__ */ botMethod<(payload: PromoteChatMember) => boolean>(
    'promoteChatMember'
  );

export type SetChatAdministratorCustomTitle = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * New custom title for the administrator; 0-16 characters, emoji are not allowed
   */
  custom_title: string;
};

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 */
export const setChatAdministratorCustomTitle = /* @__PURE__ */ botMethod<
  (payload: SetChatAdministratorCustomTitle) => boolean
>('setChatAdministratorCustomTitle');

export type BanChatSenderChat = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target sender chat
   */
  sender_chat_id: number;
};

/**
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const banChatSenderChat =
  /* @__PURE__ */ botMethod<(payload: BanChatSenderChat) => boolean>(
    'banChatSenderChat'
  );

export type UnbanChatSenderChat = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target sender chat
   */
  sender_chat_id: number;
};

/**
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const unbanChatSenderChat = /* @__PURE__ */ botMethod<
  (payload: UnbanChatSenderChat) => boolean
>('unbanChatSenderChat');

export type SetChatPermissions = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * A JSON-serialized object for new default chat permissions
   */
  permissions: ChatPermissions;

  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions?: boolean;
};

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
 */
export const setChatPermissions =
  /* @__PURE__ */ botMethod<(payload: SetChatPermissions) => boolean>(
    'setChatPermissions'
  );

export type ExportChatInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
 */
export const exportChatInviteLink = /* @__PURE__ */ botMethod<
  (payload: ExportChatInviteLink) => string
>('exportChatInviteLink');

export type CreateChatInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Invite link name; 0-32 characters
   */
  name?: string;

  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   */
  creates_join_request?: boolean;
};

/**
 * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as {@link ChatInviteLink} object.
 */
export const createChatInviteLink = /* @__PURE__ */ botMethod<
  (payload: CreateChatInviteLink) => ChatInviteLink
>('createChatInviteLink');

export type EditChatInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * The invite link to edit
   */
  invite_link: string;

  /**
   * Invite link name; 0-32 characters
   */
  name?: string;

  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   */
  creates_join_request?: boolean;
};

/**
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a {@link ChatInviteLink} object.
 */
export const editChatInviteLink =
  /* @__PURE__ */ botMethod<(payload: EditChatInviteLink) => ChatInviteLink>(
    'editChatInviteLink'
  );

export type CreateChatSubscriptionInviteLink = {
  /**
   * Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Invite link name; 0-32 characters
   */
  name?: string;

  /**
   * The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
   */
  subscription_period: number;

  /**
   * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
   */
  subscription_price: number;
};

/**
 * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a {@link ChatInviteLink} object.
 */
export const createChatSubscriptionInviteLink = /* @__PURE__ */ botMethod<
  (payload: CreateChatSubscriptionInviteLink) => ChatInviteLink
>('createChatSubscriptionInviteLink');

export type EditChatSubscriptionInviteLink = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * The invite link to edit
   */
  invite_link: string;

  /**
   * Invite link name; 0-32 characters
   */
  name?: string;
};

/**
 * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a {@link ChatInviteLink} object.
 */
export const editChatSubscriptionInviteLink = /* @__PURE__ */ botMethod<
  (payload: EditChatSubscriptionInviteLink) => ChatInviteLink
>('editChatSubscriptionInviteLink');

export type RevokeChatInviteLink = {
  /**
   * Unique identifier of the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * The invite link to revoke
   */
  invite_link: string;
};

/**
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as {@link ChatInviteLink} object.
 */
export const revokeChatInviteLink = /* @__PURE__ */ botMethod<
  (payload: RevokeChatInviteLink) => ChatInviteLink
>('revokeChatInviteLink');

export type ApproveChatJoinRequest = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
 */
export const approveChatJoinRequest = /* @__PURE__ */ botMethod<
  (payload: ApproveChatJoinRequest) => boolean
>('approveChatJoinRequest');

export type DeclineChatJoinRequest = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
 */
export const declineChatJoinRequest = /* @__PURE__ */ botMethod<
  (payload: DeclineChatJoinRequest) => boolean
>('declineChatJoinRequest');

export type SetChatPhoto = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * New chat photo, uploaded using multipart/form-data
   */
  photo: InputFile;
};

/**
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const setChatPhoto = /* @__PURE__ */ botMethod<
  (payload: SetChatPhoto) => boolean
>('setChatPhoto', formDataPayloadTransformer);

export type DeleteChatPhoto = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const deleteChatPhoto =
  /* @__PURE__ */ botMethod<(payload: DeleteChatPhoto) => boolean>(
    'deleteChatPhoto'
  );

export type SetChatTitle = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * New chat title, 1-128 characters
   */
  title: string;
};

/**
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const setChatTitle =
  /* @__PURE__ */ botMethod<(payload: SetChatTitle) => boolean>('setChatTitle');

export type SetChatDescription = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * New chat description, 0-255 characters
   */
  description?: string;
};

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 */
export const setChatDescription =
  /* @__PURE__ */ botMethod<(payload: SetChatDescription) => boolean>(
    'setChatDescription'
  );

export type PinChatMessage = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be pinned
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Identifier of a message to pin
   */
  message_id: number;

  /**
   * Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
   */
  disable_notification?: boolean;
};

/**
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const pinChatMessage =
  /* @__PURE__ */ botMethod<(payload: PinChatMessage) => boolean>(
    'pinChatMessage'
  );

export type UnpinChatMessage = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be unpinned
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
   */
  message_id?: number;
};

/**
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const unpinChatMessage =
  /* @__PURE__ */ botMethod<(payload: UnpinChatMessage) => boolean>(
    'unpinChatMessage'
  );

export type UnpinAllChatMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 */
export const unpinAllChatMessages = /* @__PURE__ */ botMethod<
  (payload: UnpinAllChatMessages) => boolean
>('unpinAllChatMessages');

export type LeaveChat = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 */
export const leaveChat =
  /* @__PURE__ */ botMethod<(payload: LeaveChat) => boolean>('leaveChat');

export type GetChat = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to get up-to-date information about the chat. Returns a {@link ChatFullInfo} object on success.
 */
export const getChat =
  /* @__PURE__ */ botMethod<(payload: GetChat) => ChatFullInfo>('getChat');

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
  (payload: GetChatAdministrators) => ChatMember[]
>('getChatAdministrators');

export type GetChatMemberCount = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 */
export const getChatMemberCount =
  /* @__PURE__ */ botMethod<(payload: GetChatMemberCount) => number>(
    'getChatMemberCount'
  );

export type GetChatMember = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a {@link ChatMember} object on success.
 */
export const getChatMember =
  /* @__PURE__ */ botMethod<(payload: GetChatMember) => ChatMember>(
    'getChatMember'
  );

export type SetChatStickerSet = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Name of the sticker set to be set as the group sticker set
   */
  sticker_set_name: string;
};

/**
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 */
export const setChatStickerSet =
  /* @__PURE__ */ botMethod<(payload: SetChatStickerSet) => boolean>(
    'setChatStickerSet'
  );

export type DeleteChatStickerSet = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 */
export const deleteChatStickerSet = /* @__PURE__ */ botMethod<
  (payload: DeleteChatStickerSet) => boolean
>('deleteChatStickerSet');

export const getForumTopicIconStickers = /* @__PURE__ */ botMethod<
  () => Sticker[]
>('getForumTopicIconStickers');

export type CreateForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Topic name, 1-128 characters
   */
  name: string;

  /**
   * Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
   */
  icon_color?:
    | 7_322_096
    | 16_766_590
    | 13_338_331
    | 9_367_192
    | 16_749_490
    | 16_478_047;

  /**
   * Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
   */
  icon_custom_emoji_id?: string;
};

/**
 * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a {@link ForumTopic} object.
 */
export const createForumTopic =
  /* @__PURE__ */ botMethod<(payload: CreateForumTopic) => ForumTopic>(
    'createForumTopic'
  );

export type EditForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;

  /**
   * New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
   */
  name?: string;

  /**
   * New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
   */
  icon_custom_emoji_id?: string;
};

/**
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 */
export const editForumTopic =
  /* @__PURE__ */ botMethod<(payload: EditForumTopic) => boolean>(
    'editForumTopic'
  );

export type CloseForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};

/**
 * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 */
export const closeForumTopic =
  /* @__PURE__ */ botMethod<(payload: CloseForumTopic) => boolean>(
    'closeForumTopic'
  );

export type ReopenForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};

/**
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 */
export const reopenForumTopic =
  /* @__PURE__ */ botMethod<(payload: ReopenForumTopic) => boolean>(
    'reopenForumTopic'
  );

export type DeleteForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};

/**
 * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
 */
export const deleteForumTopic =
  /* @__PURE__ */ botMethod<(payload: DeleteForumTopic) => boolean>(
    'deleteForumTopic'
  );

export type UnpinAllForumTopicMessages = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};

/**
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 */
export const unpinAllForumTopicMessages = /* @__PURE__ */ botMethod<
  (payload: UnpinAllForumTopicMessages) => boolean
>('unpinAllForumTopicMessages');

export type EditGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * New topic name, 1-128 characters
   */
  name: string;
};

/**
 * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 */
export const editGeneralForumTopic = /* @__PURE__ */ botMethod<
  (payload: EditGeneralForumTopic) => boolean
>('editGeneralForumTopic');

export type CloseGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 */
export const closeGeneralForumTopic = /* @__PURE__ */ botMethod<
  (payload: CloseGeneralForumTopic) => boolean
>('closeGeneralForumTopic');

export type ReopenGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
 */
export const reopenGeneralForumTopic = /* @__PURE__ */ botMethod<
  (payload: ReopenGeneralForumTopic) => boolean
>('reopenGeneralForumTopic');

export type HideGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 */
export const hideGeneralForumTopic = /* @__PURE__ */ botMethod<
  (payload: HideGeneralForumTopic) => boolean
>('hideGeneralForumTopic');

export type UnhideGeneralForumTopic = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 */
export const unhideGeneralForumTopic = /* @__PURE__ */ botMethod<
  (payload: UnhideGeneralForumTopic) => boolean
>('unhideGeneralForumTopic');

export type UnpinAllGeneralForumTopicMessages = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 */
export const unpinAllGeneralForumTopicMessages = /* @__PURE__ */ botMethod<
  (payload: UnpinAllGeneralForumTopicMessages) => boolean
>('unpinAllGeneralForumTopicMessages');

export type AnswerCallbackQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  callback_query_id: string;

  /**
   * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   */
  text?: string;

  /**
   * If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   */
  show_alert?: boolean;

  /**
   * URL that will be opened by the user's client. If you have created a {@link Game} and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
   */
  url?: string;

  /**
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   */
  cache_time?: number;
};

/**
 * Use this method to send answers to callback queries sent from {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboards}. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned. Alternatively, the user can be redirected to the specified {@link Game} URL. For this option to work, you must first create a game for your bot via @BotFather and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
 */
export const answerCallbackQuery = /* @__PURE__ */ botMethod<
  (payload: AnswerCallbackQuery) => boolean
>('answerCallbackQuery');

export type GetUserChatBoosts = {
  /**
   * Unique identifier for the chat or username of the channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a {@link UserChatBoosts} object.
 */
export const getUserChatBoosts =
  /* @__PURE__ */ botMethod<(payload: GetUserChatBoosts) => UserChatBoosts>(
    'getUserChatBoosts'
  );

export type GetBusinessConnection = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
};

/**
 * Use this method to get information about the connection of the bot with a business account. Returns a {@link BusinessConnection} object on success.
 */
export const getBusinessConnection = /* @__PURE__ */ botMethod<
  (payload: GetBusinessConnection) => BusinessConnection
>('getBusinessConnection');

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
export const setMyCommands =
  /* @__PURE__ */ botMethod<(payload: SetMyCommands) => boolean>(
    'setMyCommands'
  );

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
export const deleteMyCommands =
  /* @__PURE__ */ botMethod<(payload?: DeleteMyCommands) => boolean>(
    'deleteMyCommands'
  );

export type GetMyCommands = {
  /**
   * A JSON-serialized object, describing scope of users. Defaults to {@link BotCommandScopeDefault}.
   */
  scope?: BotCommandScope;

  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string;
};

/**
 * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of {@link BotCommand} objects. If commands aren't set, an empty list is returned.
 */
export const getMyCommands =
  /* @__PURE__ */ botMethod<(payload?: GetMyCommands) => BotCommand[]>(
    'getMyCommands'
  );

export type SetMyName = {
  /**
   * New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
   */
  name?: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
   */
  language_code?: string;
};

/**
 * Use this method to change the bot's name. Returns True on success.
 */
export const setMyName =
  /* @__PURE__ */ botMethod<(payload?: SetMyName) => boolean>('setMyName');

export type GetMyName = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string;
};

/**
 * Use this method to get the current bot name for the given user language. Returns {@link BotName} on success.
 */
export const getMyName =
  /* @__PURE__ */ botMethod<(payload?: GetMyName) => BotName>('getMyName');

export type SetMyDescription = {
  /**
   * New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
   */
  description?: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
   */
  language_code?: string;
};

/**
 * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 */
export const setMyDescription =
  /* @__PURE__ */ botMethod<(payload?: SetMyDescription) => boolean>(
    'setMyDescription'
  );

export type GetMyDescription = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string;
};

/**
 * Use this method to get the current bot description for the given user language. Returns {@link BotDescription} on success.
 */
export const getMyDescription =
  /* @__PURE__ */ botMethod<(payload?: GetMyDescription) => BotDescription>(
    'getMyDescription'
  );

export type SetMyShortDescription = {
  /**
   * New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
   */
  short_description?: string;

  /**
   * A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
   */
  language_code?: string;
};

/**
 * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
 */
export const setMyShortDescription = /* @__PURE__ */ botMethod<
  (payload?: SetMyShortDescription) => boolean
>('setMyShortDescription');

export type GetMyShortDescription = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string;
};

/**
 * Use this method to get the current bot short description for the given user language. Returns {@link BotShortDescription} on success.
 */
export const getMyShortDescription = /* @__PURE__ */ botMethod<
  (payload?: GetMyShortDescription) => BotShortDescription
>('getMyShortDescription');

export type SetChatMenuButton = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
   */
  chat_id?: number;

  /**
   * A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
   */
  menu_button?: MenuButton;
};

/**
 * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
 */
export const setChatMenuButton =
  /* @__PURE__ */ botMethod<(payload?: SetChatMenuButton) => boolean>(
    'setChatMenuButton'
  );

export type GetChatMenuButton = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
   */
  chat_id?: number;
};

/**
 * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns {@link MenuButton} on success.
 */
export const getChatMenuButton =
  /* @__PURE__ */ botMethod<(payload?: GetChatMenuButton) => MenuButton>(
    'getChatMenuButton'
  );

export type SetMyDefaultAdministratorRights = {
  /**
   * A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
   */
  rights?: ChatAdministratorRights;

  /**
   * Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
   */
  for_channels?: boolean;
};

/**
 * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 */
export const setMyDefaultAdministratorRights = /* @__PURE__ */ botMethod<
  (payload?: SetMyDefaultAdministratorRights) => boolean
>('setMyDefaultAdministratorRights');

export type GetMyDefaultAdministratorRights = {
  /**
   * Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
   */
  for_channels?: boolean;
};

/**
 * Use this method to get the current default administrator rights of the bot. Returns {@link ChatAdministratorRights} on success.
 */
export const getMyDefaultAdministratorRights = /* @__PURE__ */ botMethod<
  (payload?: GetMyDefaultAdministratorRights) => ChatAdministratorRights
>('getMyDefaultAdministratorRights');

export type EditMessageText = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * New text of the message, 1-4096 characters after entities parsing
   */
  text: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Link preview generation options for the message
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageText =
  /* @__PURE__ */ botMethod<(payload: EditMessageText) => Message | true>(
    'editMessageText'
  );

export type EditMessageCaption = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * New caption of the message, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the message caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
   */
  show_caption_above_media?: boolean;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageCaption =
  /* @__PURE__ */ botMethod<(payload?: EditMessageCaption) => Message | true>(
    'editMessageCaption'
  );

export type EditMessageMedia = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * A JSON-serialized object for a new media content of the message
   */
  media: InputMedia;

  /**
   * A JSON-serialized object for a new {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageMedia =
  /* @__PURE__ */ botMethod<(payload: EditMessageMedia) => Message | true>(
    'editMessageMedia'
  );

export type EditMessageLiveLocation = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * Latitude of new location
   */
  latitude: number;

  /**
   * Longitude of new location
   */
  longitude: number;

  /**
   * New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged
   */
  live_period?: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;

  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;

  /**
   * A JSON-serialized object for a new {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned.
 */
export const editMessageLiveLocation = /* @__PURE__ */ botMethod<
  (payload: EditMessageLiveLocation) => Message | true
>('editMessageLiveLocation');

export type StopMessageLiveLocation = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message with live location to stop
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * A JSON-serialized object for a new {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited {@link Message} is returned, otherwise True is returned.
 */
export const stopMessageLiveLocation = /* @__PURE__ */ botMethod<
  (payload?: StopMessageLiveLocation) => Message | true
>('stopMessageLiveLocation');

export type EditMessageChecklist = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id: number;

  /**
   * Unique identifier for the target message
   */
  message_id: number;

  /**
   * A JSON-serialized object for the new checklist
   */
  checklist: InputChecklist;

  /**
   * A JSON-serialized object for the new inline keyboard for the message
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit a checklist on behalf of a connected business account. On success, the edited {@link Message} is returned.
 */
export const editMessageChecklist = /* @__PURE__ */ botMethod<
  (payload: EditMessageChecklist) => Message
>('editMessageChecklist');

export type EditMessageReplyMarkup = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited {@link Message} is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
 */
export const editMessageReplyMarkup = /* @__PURE__ */ botMethod<
  (payload?: EditMessageReplyMarkup) => Message | true
>('editMessageReplyMarkup');

export type StopPoll = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Identifier of the original message with the poll
   */
  message_id: number;

  /**
   * A JSON-serialized object for a new message {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped {@link Poll} is returned.
 */
export const stopPoll =
  /* @__PURE__ */ botMethod<(payload: StopPoll) => Poll>('stopPoll');

export type DeleteMessage = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Identifier of the message to delete
   */
  message_id: number;
};

/**
 * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
 */
export const deleteMessage =
  /* @__PURE__ */ botMethod<(payload: DeleteMessage) => boolean>(
    'deleteMessage'
  );

export type DeleteMessages = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};

/**
 * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.
 */
export const deleteMessages =
  /* @__PURE__ */ botMethod<(payload: DeleteMessages) => boolean>(
    'deleteMessages'
  );

export const getAvailableGifts =
  /* @__PURE__ */ botMethod<() => Gifts>('getAvailableGifts');

export type SendGift = {
  /**
   * Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.
   */
  user_id?: number;

  /**
   * Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift.
   */
  chat_id?: number | string;

  /**
   * Identifier of the gift
   */
  gift_id: string;

  /**
   * Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver
   */
  pay_for_upgrade?: boolean;

  /**
   * Text that will be shown along with the gift; 0-128 characters
   */
  text?: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_entities?:
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'spoiler'
    | 'custom_emoji';
};

/**
 * Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.
 */
export const sendGift =
  /* @__PURE__ */ botMethod<(payload: SendGift) => boolean>('sendGift');

export type GiftPremiumSubscription = {
  /**
   * Unique identifier of the target user who will receive a Telegram Premium subscription
   */
  user_id: number;

  /**
   * Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12
   */
  month_count: 3 | 6 | 12;

  /**
   * Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months
   */
  star_count: number;

  /**
   * Text that will be shown along with the service message about the subscription; 0-128 characters
   */
  text?: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
   */
  text_entities?:
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'spoiler'
    | 'custom_emoji';
};

/**
 * {@link Gifts} a Telegram Premium subscription to the given user. Returns True on success.
 */
export const giftPremiumSubscription = /* @__PURE__ */ botMethod<
  (payload: GiftPremiumSubscription) => boolean
>('giftPremiumSubscription');

export type VerifyUser = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;

  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description?: string;
};

/**
 * Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
 */
export const verifyUser =
  /* @__PURE__ */ botMethod<(payload: VerifyUser) => boolean>('verifyUser');

export type VerifyChat = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description?: string;
};

/**
 * Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
 */
export const verifyChat =
  /* @__PURE__ */ botMethod<(payload: VerifyChat) => boolean>('verifyChat');

export type RemoveUserVerification = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
 */
export const removeUserVerification = /* @__PURE__ */ botMethod<
  (payload: RemoveUserVerification) => boolean
>('removeUserVerification');

export type RemoveChatVerification = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};

/**
 * Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
 */
export const removeChatVerification = /* @__PURE__ */ botMethod<
  (payload: RemoveChatVerification) => boolean
>('removeChatVerification');

export type ReadBusinessMessage = {
  /**
   * Unique identifier of the business connection on behalf of which to read the message
   */
  business_connection_id: string;

  /**
   * Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.
   */
  chat_id: number;

  /**
   * Unique identifier of the message to mark as read
   */
  message_id: number;
};

/**
 * Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success.
 */
export const readBusinessMessage = /* @__PURE__ */ botMethod<
  (payload: ReadBusinessMessage) => boolean
>('readBusinessMessage');

export type DeleteBusinessMessages = {
  /**
   * Unique identifier of the business connection on behalf of which to delete the messages
   */
  business_connection_id: string;

  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};

/**
 * Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.
 */
export const deleteBusinessMessages = /* @__PURE__ */ botMethod<
  (payload: DeleteBusinessMessages) => boolean
>('deleteBusinessMessages');

export type SetBusinessAccountName = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * The new value of the first name for the business account; 1-64 characters
   */
  first_name: string;

  /**
   * The new value of the last name for the business account; 0-64 characters
   */
  last_name?: string;
};

/**
 * Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.
 */
export const setBusinessAccountName = /* @__PURE__ */ botMethod<
  (payload: SetBusinessAccountName) => boolean
>('setBusinessAccountName');

export type SetBusinessAccountUsername = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * The new value of the username for the business account; 0-32 characters
   */
  username?: string;
};

/**
 * Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success.
 */
export const setBusinessAccountUsername = /* @__PURE__ */ botMethod<
  (payload: SetBusinessAccountUsername) => boolean
>('setBusinessAccountUsername');

export type SetBusinessAccountBio = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * The new value of the bio for the business account; 0-140 characters
   */
  bio?: string;
};

/**
 * Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success.
 */
export const setBusinessAccountBio = /* @__PURE__ */ botMethod<
  (payload: SetBusinessAccountBio) => boolean
>('setBusinessAccountBio');

export type SetBusinessAccountProfilePhoto = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * The new profile photo to set
   */
  photo: InputProfilePhoto;

  /**
   * Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.
   */
  is_public?: boolean;
};

/**
 * Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
 */
export const setBusinessAccountProfilePhoto = /* @__PURE__ */ botMethod<
  (payload: SetBusinessAccountProfilePhoto) => boolean
>('setBusinessAccountProfilePhoto');

export type RemoveBusinessAccountProfilePhoto = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.
   */
  is_public?: boolean;
};

/**
 * Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
 */
export const removeBusinessAccountProfilePhoto = /* @__PURE__ */ botMethod<
  (payload: RemoveBusinessAccountProfilePhoto) => boolean
>('removeBusinessAccountProfilePhoto');

export type SetBusinessAccountGiftSettings = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field
   */
  show_gift_button: boolean;

  /**
   * Types of gifts accepted by the business account
   */
  accepted_gift_types: AcceptedGiftTypes;
};

/**
 * Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success.
 */
export const setBusinessAccountGiftSettings = /* @__PURE__ */ botMethod<
  (payload: SetBusinessAccountGiftSettings) => boolean
>('setBusinessAccountGiftSettings');

export type GetBusinessAccountStarBalance = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
};

/**
 * Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns {@link StarAmount} on success.
 */
export const getBusinessAccountStarBalance = /* @__PURE__ */ botMethod<
  (payload: GetBusinessAccountStarBalance) => boolean
>('getBusinessAccountStarBalance');

export type TransferBusinessAccountStars = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Number of Telegram Stars to transfer; 1-10000
   */
  star_count: number;
};

/**
 * Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success.
 */
export const transferBusinessAccountStars = /* @__PURE__ */ botMethod<
  (payload: TransferBusinessAccountStars) => boolean
>('transferBusinessAccountStars');

export type GetBusinessAccountGifts = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Pass True to exclude gifts that aren't saved to the account's profile page
   */
  exclude_unsaved?: boolean;

  /**
   * Pass True to exclude gifts that are saved to the account's profile page
   */
  exclude_saved?: boolean;

  /**
   * Pass True to exclude gifts that can be purchased an unlimited number of times
   */
  exclude_unlimited?: boolean;

  /**
   * Pass True to exclude gifts that can be purchased a limited number of times
   */
  exclude_limited?: boolean;

  /**
   * Pass True to exclude unique gifts
   */
  exclude_unique?: boolean;

  /**
   * Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
   */
  sort_by_price?: boolean;

  /**
   * Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
   */
  offset?: string;

  /**
   * The maximum number of gifts to be returned; 1-100. Defaults to 100
   */
  limit?: number;
};

/**
 * Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns {@link OwnedGifts} on success.
 */
export const getBusinessAccountGifts = /* @__PURE__ */ botMethod<
  (payload: GetBusinessAccountGifts) => OwnedGifts
>('getBusinessAccountGifts');

export type ConvertGiftToStars = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Unique identifier of the regular gift that should be converted to Telegram Stars
   */
  owned_gift_id: string;
};

/**
 * Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.
 */
export const convertGiftToStars =
  /* @__PURE__ */ botMethod<(payload: ConvertGiftToStars) => boolean>(
    'convertGiftToStars'
  );

export type UpgradeGift = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Unique identifier of the regular gift that should be upgraded to a unique one
   */
  owned_gift_id: string;

  /**
   * Pass True to keep the original gift text, sender and receiver in the upgraded gift
   */
  keep_original_details?: boolean;

  /**
   * The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed.
   */
  star_count?: number;
};

/**
 * Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success.
 */
export const upgradeGift =
  /* @__PURE__ */ botMethod<(payload: UpgradeGift) => boolean>('upgradeGift');

export type TransferGift = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Unique identifier of the regular gift that should be transferred
   */
  owned_gift_id: string;

  /**
   * Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.
   */
  new_owner_chat_id: number;

  /**
   * The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required.
   */
  star_count?: number;
};

/**
 * Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success.
 */
export const transferGift =
  /* @__PURE__ */ botMethod<(payload: TransferGift) => boolean>('transferGift');

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
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

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
export const postStory =
  /* @__PURE__ */ botMethod<(payload: PostStory) => Story>('postStory');

export type EditStory = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Unique identifier of the story to edit
   */
  story_id: number;

  /**
   * Content of the story
   */
  content: InputStoryContent;

  /**
   * Caption of the story, 0-2048 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   */
  areas?: StoryArea[];
};

/**
 * Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns {@link Story} on success.
 */
export const editStory =
  /* @__PURE__ */ botMethod<(payload: EditStory) => Story>('editStory');

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
export const deleteStory =
  /* @__PURE__ */ botMethod<(payload: DeleteStory) => boolean>('deleteStory');

export type SendSticker = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a.WEBP sticker from the Internet, or upload a new.WEBP,.TGS, or.WEBM sticker using multipart/form-data. More information on Sending Files ». {@link Video} and animated stickers can't be sent via an HTTP URL.
   */
  sticker: InputFile | string;

  /**
   * Emoji associated with the sticker; only for just uploaded stickers
   */
  emoji?: string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * Additional interface options. A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}, {@link https://core.telegram.org/bots/features#keyboards | custom reply keyboard}, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

/**
 * Use this method to send static.WEBP, animated.TGS, or video.WEBM stickers. On success, the sent {@link Message} is returned.
 */
export const sendSticker = /* @__PURE__ */ botMethod<
  (payload: SendSticker) => Message
>('sendSticker', formDataPayloadTransformer);

export type GetStickerSet = {
  /**
   * Name of the sticker set
   */
  name: string;
};

/**
 * Use this method to get a sticker set. On success, a {@link StickerSet} object is returned.
 */
export const getStickerSet =
  /* @__PURE__ */ botMethod<(payload: GetStickerSet) => StickerSet>(
    'getStickerSet'
  );

export type GetCustomEmojiStickers = {
  /**
   * A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
   */
  custom_emoji_ids: string[];
};

/**
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of {@link Sticker} objects.
 */
export const getCustomEmojiStickers = /* @__PURE__ */ botMethod<
  (payload: GetCustomEmojiStickers) => Sticker[]
>('getCustomEmojiStickers');

export type UploadStickerFile = {
  /**
   * User identifier of sticker file owner
   */
  user_id: number;

  /**
   * A file with the sticker in.WEBP,.PNG,.TGS, or.WEBM format. See {@link https://core.telegram.org/stickers} for technical requirements. More information on Sending Files »
   */
  sticker: InputFile;

  /**
   * Format of the sticker, must be one of “static”, “animated”, “video”
   */
  sticker_format: 'static' | 'animated' | 'video';
};

/**
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded {@link File} on success.
 */
export const uploadStickerFile = /* @__PURE__ */ botMethod<
  (payload: UploadStickerFile) => File
>('uploadStickerFile', formDataPayloadTransformer);

export type CreateNewStickerSet = {
  /**
   * User identifier of created sticker set owner
   */
  user_id: number;

  /**
   * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
   */
  name: string;

  /**
   * Sticker set title, 1-64 characters
   */
  title: string;

  /**
   * A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
   */
  stickers: InputSticker[];

  /**
   * Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
   */
  sticker_type?: string;

  /**
   * Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
   */
  needs_repainting?: boolean;
};

/**
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 */
export const createNewStickerSet = /* @__PURE__ */ botMethod<
  (payload: CreateNewStickerSet) => boolean
>('createNewStickerSet');

export type AddStickerToSet = {
  /**
   * User identifier of sticker set owner
   */
  user_id: number;

  /**
   * Sticker set name
   */
  name: string;

  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
   */
  sticker: InputSticker;
};

/**
 * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
 */
export const addStickerToSet =
  /* @__PURE__ */ botMethod<(payload: AddStickerToSet) => boolean>(
    'addStickerToSet'
  );

export type SetStickerPositionInSet = {
  /**
   * File identifier of the sticker
   */
  sticker: string;

  /**
   * New sticker position in the set, zero-based
   */
  position: number;
};

/**
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 */
export const setStickerPositionInSet = /* @__PURE__ */ botMethod<
  (payload: SetStickerPositionInSet) => boolean
>('setStickerPositionInSet');

export type DeleteStickerFromSet = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
};

/**
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 */
export const deleteStickerFromSet = /* @__PURE__ */ botMethod<
  (payload: DeleteStickerFromSet) => boolean
>('deleteStickerFromSet');

export type ReplaceStickerInSet = {
  /**
   * User identifier of the sticker set owner
   */
  user_id: number;

  /**
   * Sticker set name
   */
  name: string;

  /**
   * File identifier of the replaced sticker
   */
  old_sticker: string;

  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
   */
  sticker: InputSticker;
};

/**
 * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
 */
export const replaceStickerInSet = /* @__PURE__ */ botMethod<
  (payload: ReplaceStickerInSet) => boolean
>('replaceStickerInSet');

export type SetStickerEmojiList = {
  /**
   * File identifier of the sticker
   */
  sticker: string;

  /**
   * A JSON-serialized list of 1-20 emoji associated with the sticker
   */
  emoji_list: string[];
};

/**
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 */
export const setStickerEmojiList = /* @__PURE__ */ botMethod<
  (payload: SetStickerEmojiList) => boolean
>('setStickerEmojiList');

export type SetStickerKeywords = {
  /**
   * File identifier of the sticker
   */
  sticker: string;

  /**
   * A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
   */
  keywords?: string[];
};

/**
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 */
export const setStickerKeywords =
  /* @__PURE__ */ botMethod<(payload: SetStickerKeywords) => boolean>(
    'setStickerKeywords'
  );

export type SetStickerMaskPosition = {
  /**
   * File identifier of the sticker
   */
  sticker: string;

  /**
   * A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
   */
  mask_position?: MaskPosition;
};

/**
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 */
export const setStickerMaskPosition = /* @__PURE__ */ botMethod<
  (payload: SetStickerMaskPosition) => boolean
>('setStickerMaskPosition');

export type SetStickerSetTitle = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title, 1-64 characters
   */
  title: string;
};

/**
 * Use this method to set the title of a created sticker set. Returns True on success.
 */
export const setStickerSetTitle =
  /* @__PURE__ */ botMethod<(payload: SetStickerSetTitle) => boolean>(
    'setStickerSetTitle'
  );

export type SetStickerSetThumbnail = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * User identifier of the sticker set owner
   */
  user_id: number;

  /**
   * A.WEBP or.PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a.TGS animation with a thumbnail up to 32 kilobytes in size (see {@link https://core.telegram.org/stickers#animation-requirements} for animated sticker technical requirements), or a.WEBM video with the thumbnail up to 32 kilobytes in size; see {@link https://core.telegram.org/stickers#video-requirements} for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
   */
  thumbnail?: InputFile | string;

  /**
   * Format of the thumbnail, must be one of “static” for a.WEBP or.PNG image, “animated” for a.TGS animation, or “video” for a.WEBM video
   */
  format: 'static' | 'animated' | 'video';
};

/**
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
 */
export const setStickerSetThumbnail = /* @__PURE__ */ botMethod<
  (payload: SetStickerSetThumbnail) => boolean
>('setStickerSetThumbnail', formDataPayloadTransformer);

export type SetCustomEmojiStickerSetThumbnail = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
   */
  custom_emoji_id?: string;
};

/**
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 */
export const setCustomEmojiStickerSetThumbnail = /* @__PURE__ */ botMethod<
  (payload: SetCustomEmojiStickerSetThumbnail) => boolean
>('setCustomEmojiStickerSetThumbnail');

export type DeleteStickerSet = {
  /**
   * Sticker set name
   */
  name: string;
};

/**
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 */
export const deleteStickerSet =
  /* @__PURE__ */ botMethod<(payload: DeleteStickerSet) => boolean>(
    'deleteStickerSet'
  );

export type AnswerInlineQuery = {
  /**
   * Unique identifier for the answered query
   */
  inline_query_id: string;

  /**
   * A JSON-serialized array of results for the inline query
   */
  results: InlineQueryResult[];

  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   */
  cache_time?: number;

  /**
   * Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
   */
  is_personal?: boolean;

  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   */
  next_offset?: string;

  /**
   * A JSON-serialized object describing a button to be shown above inline query results
   */
  button?: InlineQueryResultsButton;
};

/**
 * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
 */
export const answerInlineQuery =
  /* @__PURE__ */ botMethod<(payload: AnswerInlineQuery) => boolean>(
    'answerInlineQuery'
  );

export type AnswerWebAppQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  web_app_query_id: string;

  /**
   * A JSON-serialized object describing the message to be sent
   */
  result: InlineQueryResult;
};

/**
 * Use this method to set the result of an interaction with a {@link https://core.telegram.org/bots/webapps | Web App} and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a {@link SentWebAppMessage} object is returned.
 */
export const answerWebAppQuery =
  /* @__PURE__ */ botMethod<(payload: AnswerWebAppQuery) => SentWebAppMessage>(
    'answerWebAppQuery'
  );

export type SavePreparedInlineMessage = {
  /**
   * Unique identifier of the target user that can use the prepared message
   */
  user_id: number;

  /**
   * A JSON-serialized object describing the message to be sent
   */
  result: InlineQueryResult;

  /**
   * Pass True if the message can be sent to private chats with users
   */
  allow_user_chats?: boolean;

  /**
   * Pass True if the message can be sent to private chats with bots
   */
  allow_bot_chats?: boolean;

  /**
   * Pass True if the message can be sent to group and supergroup chats
   */
  allow_group_chats?: boolean;

  /**
   * Pass True if the message can be sent to channel chats
   */
  allow_channel_chats?: boolean;
};

/**
 * Stores a message that can be sent by a user of a Mini App. Returns a {@link PreparedInlineMessage} object.
 */
export const savePreparedInlineMessage = /* @__PURE__ */ botMethod<
  (payload: SavePreparedInlineMessage) => PreparedInlineMessage
>('savePreparedInlineMessage');

export type SendInvoice = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Product name, 1-32 characters
   */
  title: string;

  /**
   * Product description, 1-255 characters
   */
  description: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;

  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string;

  /**
   * Three-letter ISO 4217 currency code, see {@link https://core.telegram.org/bots/payments#supported-currencies | more on currencies}. Pass “XTR” for payments in Telegram Stars.
   */
  currency:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ARS'
    | 'AUD'
    | 'AZN'
    | 'BAM'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BYN'
    | 'CAD'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CZK'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GTQ'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KRW'
    | 'KZT'
    | 'LBP'
    | 'LKR'
    | 'MAD'
    | 'MDL'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MUR'
    | 'MVR'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'PAB'
    | 'PEN'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'SAR'
    | 'SEK'
    | 'SGD'
    | 'SYP'
    | 'THB'
    | 'TJS'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VND'
    | 'YER'
    | 'ZAR'
    | 'XTR';

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: LabeledPrice[];

  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number;

  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[];

  /**
   * Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
   */
  start_parameter?: string;

  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string;

  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
   */
  photo_url?: string;

  /**
   * Photo size in bytes
   */
  photo_size?: number;

  /**
   * Photo width
   */
  photo_width?: number;

  /**
   * Photo height
   */
  photo_height?: number;

  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean;

  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean;

  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean;

  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean;

  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean;

  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean;

  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to send invoices. On success, the sent {@link Message} is returned.
 */
export const sendInvoice =
  /* @__PURE__ */ botMethod<(payload: SendInvoice) => Message>('sendInvoice');

export type CreateInvoiceLink = {
  /**
   * Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.
   */
  business_connection_id?: string;

  /**
   * Product name, 1-32 characters
   */
  title: string;

  /**
   * Product description, 1-255 characters
   */
  description: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;

  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string;

  /**
   * Three-letter ISO 4217 currency code, see {@link https://core.telegram.org/bots/payments#supported-currencies | more on currencies}. Pass “XTR” for payments in Telegram Stars.
   */
  currency:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ARS'
    | 'AUD'
    | 'AZN'
    | 'BAM'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BYN'
    | 'CAD'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CZK'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GTQ'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KRW'
    | 'KZT'
    | 'LBP'
    | 'LKR'
    | 'MAD'
    | 'MDL'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MUR'
    | 'MVR'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'PAB'
    | 'PEN'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'SAR'
    | 'SEK'
    | 'SGD'
    | 'SYP'
    | 'THB'
    | 'TJS'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VND'
    | 'YER'
    | 'ZAR'
    | 'XTR';

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: LabeledPrice[];

  /**
   * The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.
   */
  subscription_period?: number;

  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number;

  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[];

  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string;

  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string;

  /**
   * Photo size in bytes
   */
  photo_size?: number;

  /**
   * Photo width
   */
  photo_width?: number;

  /**
   * Photo height
   */
  photo_height?: number;

  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean;

  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean;

  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean;

  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean;

  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean;

  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean;

  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean;
};

/**
 * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 */
export const createInvoiceLink =
  /* @__PURE__ */ botMethod<(payload: CreateInvoiceLink) => string>(
    'createInvoiceLink'
  );

export type AnswerShippingQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  shipping_query_id: string;

  /**
   * Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   */
  ok: boolean;

  /**
   * Required if ok is True. A JSON-serialized array of available shipping options.
   */
  shipping_options?: ShippingOption[];

  /**
   * Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.
   */
  error_message?: string;
};

/**
 * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an {@link Update} with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 */
export const answerShippingQuery = /* @__PURE__ */ botMethod<
  (payload: AnswerShippingQuery) => boolean
>('answerShippingQuery');

export type AnswerPreCheckoutQuery = {
  /**
   * Unique identifier for the query to be answered
   */
  pre_checkout_query_id: string;

  /**
   * Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
   */
  ok: boolean;

  /**
   * Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
   */
  error_message?: string;
};

/**
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an {@link Update} with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 */
export const answerPreCheckoutQuery = /* @__PURE__ */ botMethod<
  (payload: AnswerPreCheckoutQuery) => boolean
>('answerPreCheckoutQuery');

export const getMyStarBalance =
  /* @__PURE__ */ botMethod<() => StarAmount>('getMyStarBalance');

export type GetStarTransactions = {
  /**
   * Number of transactions to skip in the response
   */
  offset?: number;

  /**
   * The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number;
};

/**
 * Returns the bot's Telegram Star transactions in chronological order. On success, returns a {@link StarTransactions} object.
 */
export const getStarTransactions = /* @__PURE__ */ botMethod<
  (payload?: GetStarTransactions) => boolean
>('getStarTransactions');

export type RefundStarPayment = {
  /**
   * Identifier of the user whose payment will be refunded
   */
  user_id: number;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;
};

/**
 * Refunds a successful payment in Telegram Stars. Returns True on success.
 */
export const refundStarPayment =
  /* @__PURE__ */ botMethod<(payload: RefundStarPayment) => boolean>(
    'refundStarPayment'
  );

export type EditUserStarSubscription = {
  /**
   * Identifier of the user whose subscription will be edited
   */
  user_id: number;

  /**
   * Telegram payment identifier for the subscription
   */
  telegram_payment_charge_id: string;

  /**
   * Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
   */
  is_canceled: boolean;
};

/**
 * Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
 */
export const editUserStarSubscription = /* @__PURE__ */ botMethod<
  (payload: EditUserStarSubscription) => boolean
>('editUserStarSubscription');

export type SetPassportDataErrors = {
  /**
   * User identifier
   */
  user_id: number;

  /**
   * A JSON-serialized array describing the errors
   */
  errors: PassportElementError[];
};

/**
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success. Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
 */
export const setPassportDataErrors = /* @__PURE__ */ botMethod<
  (payload: SetPassportDataErrors) => boolean
>('setPassportDataErrors');

export type SendGame = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string;

  /**
   * Unique identifier for the target chat
   */
  chat_id: number;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number;

  /**
   * Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
   */
  game_short_name: string;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;

  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean;

  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string;

  /**
   * Description of the message to reply to
   */
  reply_parameters?: ReplyParameters;

  /**
   * A JSON-serialized object for an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Use this method to send a game. On success, the sent {@link Message} is returned.
 */
export const sendGame =
  /* @__PURE__ */ botMethod<(payload: SendGame) => Message>('sendGame');

export type SetGameScore = {
  /**
   * User identifier
   */
  user_id: number;

  /**
   * New score, must be non-negative
   */
  score: number;

  /**
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   */
  force?: boolean;

  /**
   * Pass True if the game message should not be automatically edited to include the current scoreboard
   */
  disable_edit_message?: boolean;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
};

/**
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the {@link Message} is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
 */
export const setGameScore =
  /* @__PURE__ */ botMethod<(payload: SetGameScore) => boolean>('setGameScore');

export type GetGameHighScores = {
  /**
   * Target user id
   */
  user_id: number;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id?: number;

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
};

/**
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of {@link GameHighScore} objects. This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.
 */
export const getGameHighScores =
  /* @__PURE__ */ botMethod<(payload: GetGameHighScores) => GameHighScore[]>(
    'getGameHighScores'
  );

export default {
  addStickerToSet,
  answerCallbackQuery,
  answerInlineQuery,
  answerPreCheckoutQuery,
  answerShippingQuery,
  answerWebAppQuery,
  approveChatJoinRequest,
  banChatMember,
  banChatSenderChat,
  close,
  closeForumTopic,
  closeGeneralForumTopic,
  convertGiftToStars,
  copyMessage,
  copyMessages,
  createChatInviteLink,
  createChatSubscriptionInviteLink,
  createForumTopic,
  createInvoiceLink,
  createNewStickerSet,
  declineChatJoinRequest,
  deleteBusinessMessages,
  deleteChatPhoto,
  deleteChatStickerSet,
  deleteForumTopic,
  deleteMessage,
  deleteMessages,
  deleteMyCommands,
  deleteStickerFromSet,
  deleteStickerSet,
  deleteStory,
  deleteWebhook,
  editChatInviteLink,
  editChatSubscriptionInviteLink,
  editForumTopic,
  editGeneralForumTopic,
  editMessageCaption,
  editMessageChecklist,
  editMessageLiveLocation,
  editMessageMedia,
  editMessageReplyMarkup,
  editMessageText,
  editStory,
  editUserStarSubscription,
  exportChatInviteLink,
  forwardMessage,
  forwardMessages,
  getAvailableGifts,
  getBusinessAccountGifts,
  getBusinessAccountStarBalance,
  getBusinessConnection,
  getChat,
  getChatAdministrators,
  getChatMember,
  getChatMemberCount,
  getChatMenuButton,
  getCustomEmojiStickers,
  getFile,
  getForumTopicIconStickers,
  getGameHighScores,
  getMe,
  getMyCommands,
  getMyDefaultAdministratorRights,
  getMyDescription,
  getMyName,
  getMyShortDescription,
  getMyStarBalance,
  getStarTransactions,
  getStickerSet,
  getUpdates,
  getUserChatBoosts,
  getUserProfilePhotos,
  getWebhookInfo,
  giftPremiumSubscription,
  hideGeneralForumTopic,
  leaveChat,
  logOut,
  pinChatMessage,
  postStory,
  promoteChatMember,
  readBusinessMessage,
  refundStarPayment,
  removeBusinessAccountProfilePhoto,
  removeChatVerification,
  removeUserVerification,
  reopenForumTopic,
  reopenGeneralForumTopic,
  replaceStickerInSet,
  restrictChatMember,
  revokeChatInviteLink,
  savePreparedInlineMessage,
  sendAnimation,
  sendAudio,
  sendChatAction,
  sendChecklist,
  sendContact,
  sendDice,
  sendDocument,
  sendGame,
  sendGift,
  sendInvoice,
  sendLocation,
  sendMediaGroup,
  sendMessage,
  sendPaidMedia,
  sendPhoto,
  sendPoll,
  sendSticker,
  sendVenue,
  sendVideo,
  sendVideoNote,
  sendVoice,
  setBusinessAccountBio,
  setBusinessAccountGiftSettings,
  setBusinessAccountName,
  setBusinessAccountProfilePhoto,
  setBusinessAccountUsername,
  setChatAdministratorCustomTitle,
  setChatDescription,
  setChatMenuButton,
  setChatPermissions,
  setChatPhoto,
  setChatStickerSet,
  setChatTitle,
  setCustomEmojiStickerSetThumbnail,
  setGameScore,
  setMessageReaction,
  setMyCommands,
  setMyDefaultAdministratorRights,
  setMyDescription,
  setMyName,
  setMyShortDescription,
  setPassportDataErrors,
  setStickerEmojiList,
  setStickerKeywords,
  setStickerMaskPosition,
  setStickerPositionInSet,
  setStickerSetThumbnail,
  setStickerSetTitle,
  setUserEmojiStatus,
  setWebhook,
  stopMessageLiveLocation,
  stopPoll,
  transferBusinessAccountStars,
  transferGift,
  unbanChatMember,
  unbanChatSenderChat,
  unhideGeneralForumTopic,
  unpinAllChatMessages,
  unpinAllForumTopicMessages,
  unpinAllGeneralForumTopicMessages,
  unpinChatMessage,
  upgradeGift,
  uploadStickerFile,
  verifyChat,
  verifyUser,
};

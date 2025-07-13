// This file is generated. Do not edit it.

/**
 * This object represents an incoming update.At most one of the optional parameters can be present in any given update.
 */
export type Update = {
  /**
   * The update's unique identifier. {@link Update} identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
   */
  update_id: number;

  /**
   * New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: Message;

  /**
   * New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_message?: Message;

  /**
   * New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channel_post?: Message;

  /**
   * New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_channel_post?: Message;

  /**
   * The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
   */
  business_connection?: BusinessConnection;

  /**
   * New message from a connected business account
   */
  business_message?: Message;

  /**
   * New version of a message from a connected business account
   */
  edited_business_message?: Message;

  /**
   * Messages were deleted from a connected business account
   */
  deleted_business_messages?: BusinessMessagesDeleted;

  /**
   * A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots.
   */
  message_reaction?: MessageReactionUpdated;

  /**
   * Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
   */
  message_reaction_count?: MessageReactionCountUpdated;

  /**
   * New incoming inline query
   */
  inline_query?: InlineQuery;

  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the {@link https://core.telegram.org/bots/inline#collecting-feedback | feedback collecting} for details on how to enable these updates for your bot.
   */
  chosen_inline_result?: ChosenInlineResult;

  /**
   * New incoming callback query
   */
  callback_query?: CallbackQuery;

  /**
   * New incoming shipping query. Only for invoices with flexible price
   */
  shipping_query?: ShippingQuery;

  /**
   * New incoming pre-checkout query. Contains full information about checkout
   */
  pre_checkout_query?: PreCheckoutQuery;

  /**
   * A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
   */
  purchased_paid_media?: PaidMediaPurchased;

  /**
   * New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
   */
  poll?: Poll;

  /**
   * A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   */
  poll_answer?: PollAnswer;

  /**
   * The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
   */
  my_chat_member?: ChatMemberUpdated;

  /**
   * A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
   */
  chat_member?: ChatMemberUpdated;

  /**
   * A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
   */
  chat_join_request?: ChatJoinRequest;

  /**
   * A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
   */
  chat_boost?: ChatBoostUpdated;

  /**
   * A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
   */
  removed_chat_boost?: ChatBoostRemoved;
};

/**
 * Describes the current status of a webhook.
 */
export type WebhookInfo = {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;

  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;

  /**
   * Currently used webhook IP address
   */
  ip_address?: string;

  /**
   * Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number;

  /**
   * Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_message?: string;

  /**
   * Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
   */
  last_synchronization_error_date?: number;

  /**
   * The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: number;

  /**
   * A list of update types the bot is subscribed to. Defaults to all update types except chat_member
   */
  allowed_updates?: string[];
};

/**
 * This object represents a Telegram user or bot.
 */
export type User = {
  /**
   * Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * True, if this user is a bot
   */
  is_bot: boolean;

  /**
   * User's or bot's first name
   */
  first_name: string;

  /**
   * User's or bot's last name
   */
  last_name?: string;

  /**
   * User's or bot's username
   */
  username?: string;

  /**
   * IETF language tag of the user's language
   */
  language_code?: string;

  /**
   * True, if this user is a Telegram Premium user
   */
  is_premium?: true;

  /**
   * True, if this user added the bot to the attachment menu
   */
  added_to_attachment_menu?: true;

  /**
   * True, if the bot can be invited to groups. Returned only in getMe.
   */
  can_join_groups?: boolean;

  /**
   * True, if {@link https://core.telegram.org/bots/features#privacy-mode | privacy mode} is disabled for the bot. Returned only in getMe.
   */
  can_read_all_group_messages?: boolean;

  /**
   * True, if the bot supports inline queries. Returned only in getMe.
   */
  supports_inline_queries?: boolean;

  /**
   * True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
   */
  can_connect_to_business?: boolean;

  /**
   * True, if the bot has a main Web App. Returned only in getMe.
   */
  has_main_web_app?: boolean;
};

/**
 * This object represents a chat.
 */
export type Chat = {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
   */
  type: string;

  /**
   * Title, for supergroups, channels and group chats
   */
  title?: string;

  /**
   * Username, for private chats, supergroups and channels if available
   */
  username?: string;

  /**
   * First name of the other party in a private chat
   */
  first_name?: string;

  /**
   * Last name of the other party in a private chat
   */
  last_name?: string;

  /**
   * True, if the supergroup chat is a forum (has topics enabled)
   */
  is_forum?: true;
};

/**
 * This object contains full information about a chat.
 */
export type ChatFullInfo = {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;

  /**
   * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
   */
  type: string;

  /**
   * Title, for supergroups, channels and group chats
   */
  title?: string;

  /**
   * Username, for private chats, supergroups and channels if available
   */
  username?: string;

  /**
   * First name of the other party in a private chat
   */
  first_name?: string;

  /**
   * Last name of the other party in a private chat
   */
  last_name?: string;

  /**
   * True, if the supergroup chat is a forum (has topics enabled)
   */
  is_forum?: true;

  /**
   * Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.
   */
  accent_color_id: number;

  /**
   * The maximum number of reactions that can be set on a message in the chat
   */
  max_reaction_count: number;

  /**
   * {@link Chat} photo
   */
  photo?: ChatPhoto;

  /**
   * If non-empty, the list of all active chat usernames; for private chats, supergroups and channels
   */
  active_usernames?: string[];

  /**
   * For private chats, the date of birth of the user
   */
  birthdate?: Birthdate;

  /**
   * For private chats with business accounts, the intro of the business
   */
  business_intro?: BusinessIntro;

  /**
   * For private chats with business accounts, the location of the business
   */
  business_location?: BusinessLocation;

  /**
   * For private chats with business accounts, the opening hours of the business
   */
  business_opening_hours?: BusinessOpeningHours;

  /**
   * For private chats, the personal channel of the user
   */
  personal_chat?: Chat;

  /**
   * List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.
   */
  available_reactions?: ReactionType[];

  /**
   * Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
   */
  background_custom_emoji_id?: string;

  /**
   * Identifier of the accent color for the chat's profile background. See profile accent colors for more details.
   */
  profile_accent_color_id?: number;

  /**
   * Custom emoji identifier of the emoji chosen by the chat for its profile background
   */
  profile_background_custom_emoji_id?: string;

  /**
   * Custom emoji identifier of the emoji status of the chat or the other party in a private chat
   */
  emoji_status_custom_emoji_id?: string;

  /**
   * Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
   */
  emoji_status_expiration_date?: number;

  /**
   * Bio of the other party in a private chat
   */
  bio?: string;

  /**
   * True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user
   */
  has_private_forwards?: true;

  /**
   * True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
   */
  has_restricted_voice_and_video_messages?: true;

  /**
   * True, if users need to join the supergroup before they can send messages
   */
  join_to_send_messages?: true;

  /**
   * True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
   */
  join_by_request?: true;

  /**
   * Description, for groups, supergroups and channel chats
   */
  description?: string;

  /**
   * Primary invite link, for groups, supergroups and channel chats
   */
  invite_link?: string;

  /**
   * The most recent pinned message (by sending date)
   */
  pinned_message?: Message;

  /**
   * Default chat member permissions, for groups and supergroups
   */
  permissions?: ChatPermissions;

  /**
   * Information about types of gifts that are accepted by the chat or by the corresponding user for private chats
   */
  accepted_gift_types: AcceptedGiftTypes;

  /**
   * True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
   */
  can_send_paid_media?: true;

  /**
   * For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
   */
  slow_mode_delay?: number;

  /**
   * For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions
   */
  unrestrict_boost_count?: number;

  /**
   * The time after which all messages sent to the chat will be automatically deleted; in seconds
   */
  message_auto_delete_time?: number;

  /**
   * True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.
   */
  has_aggressive_anti_spam_enabled?: true;

  /**
   * True, if non-administrators can only get the list of bots and administrators in the chat
   */
  has_hidden_members?: true;

  /**
   * True, if messages from the chat can't be forwarded to other chats
   */
  has_protected_content?: true;

  /**
   * True, if new chat members will have access to old messages; available only to chat administrators
   */
  has_visible_history?: true;

  /**
   * For supergroups, name of the group sticker set
   */
  sticker_set_name?: string;

  /**
   * True, if the bot can change the group sticker set
   */
  can_set_sticker_set?: true;

  /**
   * For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
   */
  custom_emoji_sticker_set_name?: string;

  /**
   * Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  linked_chat_id?: number;

  /**
   * For supergroups, the location to which the supergroup is connected
   */
  location?: ChatLocation;
};

/**
 * This object represents a message.
 */
export type Message = {
  /**
   * Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   */
  message_id: number;

  /**
   * Unique identifier of a message thread to which the message belongs; for supergroups only
   */
  message_thread_id?: number;

  /**
   * Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
   */
  from?: User;

  /**
   * Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
   */
  sender_chat?: Chat;

  /**
   * If the sender of the message boosted the chat, the number of boosts added by the user
   */
  sender_boost_count?: number;

  /**
   * The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.
   */
  sender_business_bot?: User;

  /**
   * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
   */
  date: number;

  /**
   * Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
   */
  business_connection_id?: string;

  /**
   * Chat the message belongs to
   */
  chat: Chat;

  /**
   * Information about the original message for forwarded messages
   */
  forward_origin?: MessageOrigin;

  /**
   * True, if the message is sent to a forum topic
   */
  is_topic_message?: true;

  /**
   * True, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  is_automatic_forward?: true;

  /**
   * For replies in the same chat and message thread, the original message. Note that the {@link Message} object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  reply_to_message?: Message;

  /**
   * Information about the message that is being replied to, which may come from another chat or forum topic
   */
  external_reply?: ExternalReplyInfo;

  /**
   * For replies that quote part of the original message, the quoted part of the message
   */
  quote?: TextQuote;

  /**
   * For replies to a story, the original story
   */
  reply_to_story?: Story;

  /**
   * Bot through which the message was sent
   */
  via_bot?: User;

  /**
   * Date the message was last edited in Unix time
   */
  edit_date?: number;

  /**
   * True, if the message can't be forwarded
   */
  has_protected_content?: true;

  /**
   * True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
   */
  is_from_offline?: true;

  /**
   * The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string;

  /**
   * Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  author_signature?: string;

  /**
   * The number of Telegram Stars that were paid by the sender of the message to send it
   */
  paid_star_count?: number;

  /**
   * For text messages, the actual UTF-8 text of the message
   */
  text?: string;

  /**
   * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * Options used for link preview generation for the message, if it is a text message and link preview options were changed
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * Unique identifier of the message effect added to the message
   */
  effect_id?: string;

  /**
   * {@link Message} is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
   */
  animation?: Animation;

  /**
   * {@link Message} is an audio file, information about the file
   */
  audio?: Audio;

  /**
   * {@link Message} is a general file, information about the file
   */
  document?: Document;

  /**
   * {@link Message} contains paid media; information about the paid media
   */
  paid_media?: PaidMediaInfo;

  /**
   * {@link Message} is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];

  /**
   * {@link Message} is a sticker, information about the sticker
   */
  sticker?: Sticker;

  /**
   * {@link Message} is a forwarded story
   */
  story?: Story;

  /**
   * {@link Message} is a video, information about the video
   */
  video?: Video;

  /**
   * {@link Message} is a video note, information about the video message
   */
  video_note?: VideoNote;

  /**
   * {@link Message} is a voice message, information about the file
   */
  voice?: Voice;

  /**
   * Caption for the animation, audio, document, paid media, photo, video or voice
   */
  caption?: string;

  /**
   * For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  caption_entities?: MessageEntity[];

  /**
   * True, if the caption must be shown above the message media
   */
  show_caption_above_media?: true;

  /**
   * True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: true;

  /**
   * {@link Message} is a checklist
   */
  checklist?: Checklist;

  /**
   * {@link Message} is a shared contact, information about the contact
   */
  contact?: Contact;

  /**
   * {@link Message} is a dice with random value
   */
  dice?: Dice;

  /**
   * {@link Message} is a game, information about the game. More about games »
   */
  game?: Game;

  /**
   * {@link Message} is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * {@link Message} is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
   */
  venue?: Venue;

  /**
   * {@link Message} is a shared location, information about the location
   */
  location?: Location;

  /**
   * New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
   */
  new_chat_members?: User[];

  /**
   * A member was removed from the group, information about them (this member may be the bot itself)
   */
  left_chat_member?: User;

  /**
   * A chat title was changed to this value
   */
  new_chat_title?: string;

  /**
   * A chat photo was change to this value
   */
  new_chat_photo?: PhotoSize[];

  /**
   * Service message: the chat photo was deleted
   */
  delete_chat_photo?: true;

  /**
   * Service message: the group has been created
   */
  group_chat_created?: true;

  /**
   * Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
   */
  supergroup_chat_created?: true;

  /**
   * Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
   */
  channel_chat_created?: true;

  /**
   * Service message: auto-delete timer settings changed in the chat
   */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;

  /**
   * The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_from_chat_id?: number;

  /**
   * Specified message was pinned. Note that the {@link Message} object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  pinned_message?: MaybeInaccessibleMessage;

  /**
   * {@link Message} is an invoice for a payment, information about the invoice. More about payments »
   */
  invoice?: Invoice;

  /**
   * {@link Message} is a service message about a successful payment, information about the payment. More about payments »
   */
  successful_payment?: SuccessfulPayment;

  /**
   * {@link Message} is a service message about a refunded payment, information about the payment. More about payments »
   */
  refunded_payment?: RefundedPayment;

  /**
   * Service message: users were shared with the bot
   */
  users_shared?: UsersShared;

  /**
   * Service message: a chat was shared with the bot
   */
  chat_shared?: ChatShared;

  /**
   * Service message: a regular gift was sent or received
   */
  gift?: GiftInfo;

  /**
   * Service message: a unique gift was sent or received
   */
  unique_gift?: UniqueGiftInfo;

  /**
   * The domain name of the website on which the user has logged in. {@link https://core.telegram.org/widgets/login | More about Telegram Login »}
   */
  connected_website?: string;

  /**
   * Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | requestWriteAccess}
   */
  write_access_allowed?: WriteAccessAllowed;

  /**
   * Telegram Passport data
   */
  passport_data?: PassportData;

  /**
   * Service message. A user in the chat triggered another user's proximity alert while sharing Live {@link Location}.
   */
  proximity_alert_triggered?: ProximityAlertTriggered;

  /**
   * Service message: user boosted the chat
   */
  boost_added?: ChatBoostAdded;

  /**
   * Service message: chat background set
   */
  chat_background_set?: ChatBackground;

  /**
   * Service message: some tasks in a checklist were marked as done or not done
   */
  checklist_tasks_done?: ChecklistTasksDone;

  /**
   * Service message: tasks were added to a checklist
   */
  checklist_tasks_added?: ChecklistTasksAdded;

  /**
   * Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed
   */
  direct_message_price_changed?: DirectMessagePriceChanged;

  /**
   * Service message: forum topic created
   */
  forum_topic_created?: ForumTopicCreated;

  /**
   * Service message: forum topic edited
   */
  forum_topic_edited?: ForumTopicEdited;

  /**
   * Service message: forum topic closed
   */
  forum_topic_closed?: ForumTopicClosed;

  /**
   * Service message: forum topic reopened
   */
  forum_topic_reopened?: ForumTopicReopened;

  /**
   * Service message: the 'General' forum topic hidden
   */
  general_forum_topic_hidden?: GeneralForumTopicHidden;

  /**
   * Service message: the 'General' forum topic unhidden
   */
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;

  /**
   * Service message: a scheduled giveaway was created
   */
  giveaway_created?: GiveawayCreated;

  /**
   * The message is a scheduled giveaway message
   */
  giveaway?: Giveaway;

  /**
   * A giveaway with public winners was completed
   */
  giveaway_winners?: GiveawayWinners;

  /**
   * Service message: a giveaway without public winners was completed
   */
  giveaway_completed?: GiveawayCompleted;

  /**
   * Service message: the price for paid messages has changed in the chat
   */
  paid_message_price_changed?: PaidMessagePriceChanged;

  /**
   * Service message: video chat scheduled
   */
  video_chat_scheduled?: VideoChatScheduled;

  /**
   * Service message: video chat started
   */
  video_chat_started?: VideoChatStarted;

  /**
   * Service message: video chat ended
   */
  video_chat_ended?: VideoChatEnded;

  /**
   * Service message: new participants invited to a video chat
   */
  video_chat_participants_invited?: VideoChatParticipantsInvited;

  /**
   * Service message: data sent by a Web App
   */
  web_app_data?: WebAppData;

  /**
   * Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * This object represents a unique message identifier.
 */
export type MessageId = {
  /**
   * Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   */
  message_id: number;
};

/**
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 */
export type InaccessibleMessage = {
  /**
   * Chat the message belonged to
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Always 0. The field can be used to differentiate regular and inaccessible messages.
   */
  date: number;
};

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
export type MessageEntity = {
  /**
   * Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag or #hashtag@chatusername), “cashtag” ($USD or $USD@chatusername), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)
   */
  type: string;

  /**
   * Offset in {@link https://core.telegram.org/api/entities#entity-length | UTF-16 code units} to the start of the entity
   */
  offset: number;

  /**
   * Length of the entity in {@link https://core.telegram.org/api/entities#entity-length | UTF-16 code units}
   */
  length: number;

  /**
   * For “text_link” only, URL that will be opened after user taps on the text
   */
  url?: string;

  /**
   * For “text_mention” only, the mentioned user
   */
  user?: User;

  /**
   * For “pre” only, the programming language of the entity text
   */
  language?: string;

  /**
   * For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
   */
  custom_emoji_id?: string;
};

/**
 * This object contains information about the quoted part of a message that is replied to by the given message.
 */
export type TextQuote = {
  /**
   * Text of the quoted part of a message that is replied to by the given message
   */
  text: string;

  /**
   * Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.
   */
  entities?: MessageEntity[];

  /**
   * Approximate quote position in the original message in UTF-16 code units as specified by the sender
   */
  position: number;

  /**
   * True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
   */
  is_manual?: true;
};

/**
 * This object contains information about a message that is being replied to, which may come from another {@link ExternalReplyInfo.chat | chat} or forum topic.
 */
export type ExternalReplyInfo = {
  /**
   * Origin of the message replied to by the given message
   */
  origin: MessageOrigin;

  /**
   * {@link Chat} the original message belongs to. Available only if the chat is a supergroup or a channel.
   */
  chat?: Chat;

  /**
   * Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
   */
  message_id?: number;

  /**
   * Options used for link preview generation for the original message, if it is a text message
   */
  link_preview_options?: LinkPreviewOptions;

  /**
   * {@link Message} is an animation, information about the animation
   */
  animation?: Animation;

  /**
   * {@link Message} is an audio file, information about the file
   */
  audio?: Audio;

  /**
   * {@link Message} is a general file, information about the file
   */
  document?: Document;

  /**
   * {@link Message} contains paid media; information about the paid media
   */
  paid_media?: PaidMediaInfo;

  /**
   * {@link Message} is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];

  /**
   * {@link Message} is a sticker, information about the sticker
   */
  sticker?: Sticker;

  /**
   * {@link Message} is a forwarded story
   */
  story?: Story;

  /**
   * {@link Message} is a video, information about the video
   */
  video?: Video;

  /**
   * {@link Message} is a video note, information about the video message
   */
  video_note?: VideoNote;

  /**
   * {@link Message} is a voice message, information about the file
   */
  voice?: Voice;

  /**
   * True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: true;

  /**
   * {@link Message} is a checklist
   */
  checklist?: Checklist;

  /**
   * {@link Message} is a shared contact, information about the contact
   */
  contact?: Contact;

  /**
   * {@link Message} is a dice with random value
   */
  dice?: Dice;

  /**
   * {@link Message} is a game, information about the game. More about games »
   */
  game?: Game;

  /**
   * {@link Message} is a scheduled giveaway, information about the giveaway
   */
  giveaway?: Giveaway;

  /**
   * A giveaway with public winners was completed
   */
  giveaway_winners?: GiveawayWinners;

  /**
   * {@link Message} is an invoice for a payment, information about the invoice. More about payments »
   */
  invoice?: Invoice;

  /**
   * {@link Message} is a shared location, information about the location
   */
  location?: Location;

  /**
   * {@link Message} is a native poll, information about the poll
   */
  poll?: Poll;

  /**
   * {@link Message} is a venue, information about the venue
   */
  venue?: Venue;
};

/**
 * Describes reply parameters for the message that is being sent.
 */
export type ReplyParameters = {
  /**
   * Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified
   */
  message_id: number;

  /**
   * If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account.
   */
  chat_id?: number | string;

  /**
   * Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message.
   */
  quote?: string;

  /**
   * Mode for parsing entities in the quote. See formatting options for more details.
   */
  quote_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.
   */
  quote_entities?: MessageEntity[];

  /**
   * Position of the quote in the original message in UTF-16 code units
   */
  quote_position?: number;
};

/**
 * The message was originally sent by a known user.
 */
export type MessageOriginUser = {
  /**
   * Type of the message origin, always “user”
   */
  type: string;

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * User that sent the message originally
   */
  sender_user: User;
};

/**
 * The message was originally sent by an unknown user.
 */
export type MessageOriginHiddenUser = {
  /**
   * Type of the message origin, always “hidden_user”
   */
  type: string;

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Name of the user that sent the message originally
   */
  sender_user_name: string;
};

/**
 * The message was originally sent on behalf of a chat to a group chat.
 */
export type MessageOriginChat = {
  /**
   * Type of the message origin, always “chat”
   */
  type: string;

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Chat that sent the message originally
   */
  sender_chat: Chat;

  /**
   * For messages originally sent by an anonymous chat administrator, original message author signature
   */
  author_signature?: string;
};

/**
 * The message was originally sent to a channel {@link MessageOriginChannel.chat | chat}.
 */
export type MessageOriginChannel = {
  /**
   * Type of the message origin, always “channel”
   */
  type: string;

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Channel chat to which the message was originally sent
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Signature of the original post author
   */
  author_signature?: string;
};

/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 */
export type PhotoSize = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Photo width
   */
  width: number;

  /**
   * Photo height
   */
  height: number;

  /**
   * {@link File} size in bytes
   */
  file_size?: number;
};

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 */
export type Animation = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Video width as defined by the sender
   */
  width: number;

  /**
   * Video height as defined by the sender
   */
  height: number;

  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;

  /**
   * {@link Animation} thumbnail as defined by the sender
   */
  thumbnail?: PhotoSize;

  /**
   * Original animation filename as defined by the sender
   */
  file_name?: string;

  /**
   * MIME type of the file as defined by the sender
   */
  mime_type?: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
};

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export type Audio = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Duration of the audio in seconds as defined by the sender
   */
  duration: number;

  /**
   * Performer of the audio as defined by the sender or by audio tags
   */
  performer?: string;

  /**
   * Title of the audio as defined by the sender or by audio tags
   */
  title?: string;

  /**
   * Original filename as defined by the sender
   */
  file_name?: string;

  /**
   * MIME type of the file as defined by the sender
   */
  mime_type?: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;

  /**
   * Thumbnail of the album cover to which the music file belongs
   */
  thumbnail?: PhotoSize;
};

/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 */
export type Document = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * {@link Document} thumbnail as defined by the sender
   */
  thumbnail?: PhotoSize;

  /**
   * Original filename as defined by the sender
   */
  file_name?: string;

  /**
   * MIME type of the file as defined by the sender
   */
  mime_type?: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
};

/**
 * This object represents a story.
 */
export type Story = {
  /**
   * Chat that posted the story
   */
  chat: Chat;

  /**
   * Unique identifier for the story in the chat
   */
  id: number;
};

/**
 * This object represents a video file.
 */
export type Video = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Video width as defined by the sender
   */
  width: number;

  /**
   * Video height as defined by the sender
   */
  height: number;

  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;

  /**
   * {@link Video} thumbnail
   */
  thumbnail?: PhotoSize;

  /**
   * Available sizes of the cover of the video in the message
   */
  cover?: PhotoSize[];

  /**
   * Timestamp in seconds from which the video will play in the message
   */
  start_timestamp?: number;

  /**
   * Original filename as defined by the sender
   */
  file_name?: string;

  /**
   * MIME type of the file as defined by the sender
   */
  mime_type?: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
};

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 */
export type VideoNote = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Video width and height (diameter of the video message) as defined by the sender
   */
  length: number;

  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;

  /**
   * {@link Video} thumbnail
   */
  thumbnail?: PhotoSize;

  /**
   * {@link File} size in bytes
   */
  file_size?: number;
};

/**
 * This object represents a voice note.
 */
export type Voice = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Duration of the audio in seconds as defined by the sender
   */
  duration: number;

  /**
   * MIME type of the file as defined by the sender
   */
  mime_type?: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
};

/**
 * Describes the paid media added to a message.
 */
export type PaidMediaInfo = {
  /**
   * The number of Telegram Stars that must be paid to buy access to the media
   */
  star_count: number;

  /**
   * Information about the paid media
   */
  paid_media: PaidMedia[];
};

/**
 * The paid media isn't available before the payment.
 */
export type PaidMediaPreview = {
  /**
   * Type of the paid media, always “preview”
   */
  type: string;

  /**
   * Media width as defined by the sender
   */
  width?: number;

  /**
   * Media height as defined by the sender
   */
  height?: number;

  /**
   * Duration of the media in seconds as defined by the sender
   */
  duration?: number;
};

/**
 * The paid media is a {@link PaidMediaPhoto.photo | photo}.
 */
export type PaidMediaPhoto = {
  /**
   * Type of the paid media, always “photo”
   */
  type: string;

  /**
   * The photo
   */
  photo: PhotoSize[];
};

/**
 * The paid media is a {@link PaidMediaVideo.video | video}.
 */
export type PaidMediaVideo = {
  /**
   * Type of the paid media, always “video”
   */
  type: string;

  /**
   * The video
   */
  video: Video;
};

/**
 * This object represents a phone contact.
 */
export type Contact = {
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
   * Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  user_id?: number;

  /**
   * Additional data about the contact in the form of a vCard
   */
  vcard?: string;
};

/**
 * This object represents an animated {@link Dice.emoji | emoji} that displays a random {@link Dice.value | value}.
 */
export type Dice = {
  /**
   * Emoji on which the dice throw animation is based
   */
  emoji: string;

  /**
   * Value of the dice, 1-6 for “🎲”, “🎯” and “🎳” base emoji, 1-5 for “🏀” and “⚽” base emoji, 1-64 for “🎰” base emoji
   */
  value: number;
};

/**
 * This object contains information about one answer option in a poll.
 */
export type PollOption = {
  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
   */
  text_entities?: MessageEntity[];

  /**
   * Number of users that voted for this option
   */
  voter_count: number;
};

/**
 * This object contains information about one answer option in a poll to be sent.
 */
export type InputPollOption = {
  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
   */
  text_parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode
   */
  text_entities?: MessageEntity[];
};

/**
 * This object represents an answer of a {@link PollAnswer.user | user} in a non-anonymous poll.
 */
export type PollAnswer = {
  /**
   * Unique poll identifier
   */
  poll_id: string;

  /**
   * The chat that changed the answer to the poll, if the voter is anonymous
   */
  voter_chat?: Chat;

  /**
   * The user that changed the answer to the poll, if the voter isn't anonymous
   */
  user?: User;

  /**
   * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
   */
  option_ids: number[];
};

/**
 * This object contains information about a poll.
 */
export type Poll = {
  /**
   * Unique poll identifier
   */
  id: string;

  /**
   * Poll question, 1-300 characters
   */
  question: string;

  /**
   * Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
   */
  question_entities?: MessageEntity[];

  /**
   * List of poll options
   */
  options: PollOption[];

  /**
   * Total number of users that voted in the poll
   */
  total_voter_count: number;

  /**
   * True, if the poll is closed
   */
  is_closed: boolean;

  /**
   * True, if the poll is anonymous
   */
  is_anonymous: boolean;

  /**
   * Poll type, currently can be “regular” or “quiz”
   */
  type: string;

  /**
   * True, if the poll allows multiple answers
   */
  allows_multiple_answers: boolean;

  /**
   * 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
   */
  correct_option_id?: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
   */
  explanation?: string;

  /**
   * Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   */
  explanation_entities?: MessageEntity[];

  /**
   * Amount of time in seconds the poll will be active after creation
   */
  open_period?: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed
   */
  close_date?: number;
};

/**
 * Describes a task in a checklist.
 */
export type ChecklistTask = {
  /**
   * Unique identifier of the task
   */
  id: number;

  /**
   * Text of the task
   */
  text: string;

  /**
   * Special entities that appear in the task text
   */
  text_entities?: MessageEntity[];

  /**
   * {@link User} that completed the task; omitted if the task wasn't completed
   */
  completed_by_user?: User;

  /**
   * Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed
   */
  completion_date?: number;
};

/**
 * Describes a checklist.
 */
export type Checklist = {
  /**
   * Title of the checklist
   */
  title: string;

  /**
   * Special entities that appear in the checklist title
   */
  title_entities?: MessageEntity[];

  /**
   * List of tasks in the checklist
   */
  tasks: ChecklistTask[];

  /**
   * True, if users other than the creator of the list can add tasks to the list
   */
  others_can_add_tasks?: true;

  /**
   * True, if users other than the creator of the list can mark tasks as done or not done
   */
  others_can_mark_tasks_as_done?: true;
};

/**
 * Describes a task to add to a checklist.
 */
export type InputChecklistTask = {
  /**
   * Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist
   */
  id: number;

  /**
   * Text of the task; 1-100 characters after entities parsing
   */
  text: string;

  /**
   * Mode for parsing entities in the text. See formatting options for more details.
   */
  parse_mode: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
   */
  text_entities?: MessageEntity[];
};

/**
 * Describes a checklist to create.
 */
export type InputChecklist = {
  /**
   * Title of the checklist; 1-255 characters after entities parsing
   */
  title: string;

  /**
   * Mode for parsing entities in the title. See formatting options for more details.
   */
  parse_mode: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
   */
  title_entities?: MessageEntity[];

  /**
   * List of 1-30 tasks in the checklist
   */
  tasks: InputChecklistTask[];

  /**
   * Pass True if other users can add tasks to the checklist
   */
  others_can_add_tasks?: boolean;

  /**
   * Pass True if other users can mark tasks as done or not done in the checklist
   */
  others_can_mark_tasks_as_done?: boolean;
};

/**
 * Describes a service message about checklist tasks marked as done or not done.
 */
export type ChecklistTasksDone = {
  /**
   * {@link Message} containing the checklist whose tasks were marked as done or not done. Note that the {@link Message} object in this field will not contain the reply_to_message field even if it itself is a reply.
   */
  checklist_message?: Message;

  /**
   * Identifiers of the tasks that were marked as done
   */
  marked_as_done_task_ids?: number[];

  /**
   * Identifiers of the tasks that were marked as not done
   */
  marked_as_not_done_task_ids?: number[];
};

/**
 * Describes a service message about {@link ChecklistTasksAdded.tasks | tasks} added to a checklist.
 */
export type ChecklistTasksAdded = {
  /**
   * {@link Message} containing the checklist to which the tasks were added. Note that the {@link Message} object in this field will not contain the reply_to_message field even if it itself is a reply.
   */
  checklist_message?: Message;

  /**
   * List of tasks added to the checklist
   */
  tasks: ChecklistTask[];
};

/**
 * This object represents a point on the map.
 */
export type Location = {
  /**
   * Latitude as defined by the sender
   */
  latitude: number;

  /**
   * Longitude as defined by the sender
   */
  longitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
   */
  live_period?: number;

  /**
   * The direction in which user is moving, in degrees; 1-360. For active live locations only.
   */
  heading?: number;

  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
   */
  proximity_alert_radius?: number;
};

/**
 * This object represents a venue.
 */
export type Venue = {
  /**
   * Venue location. Can't be a live location
   */
  location: Location;

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
   * Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
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
};

/**
 * Describes {@link WebAppData.data | data} sent from a {@link https://core.telegram.org/bots/webapps | Web App} to the bot.
 */
export type WebAppData = {
  /**
   * The data. Be aware that a bad client can send arbitrary data in this field.
   */
  data: string;

  /**
   * Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
   */
  button_text: string;
};

/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
export type ProximityAlertTriggered = {
  /**
   * User that triggered the alert
   */
  traveler: User;

  /**
   * User that set the alert
   */
  watcher: User;

  /**
   * The distance between the users
   */
  distance: number;
};

/**
 * This object represents a service message about a change in auto-delete timer settings.
 */
export type MessageAutoDeleteTimerChanged = {
  /**
   * New auto-delete time for messages in the chat; in seconds
   */
  message_auto_delete_time: number;
};

/**
 * This object represents a service message about a user boosting a chat.
 */
export type ChatBoostAdded = {
  /**
   * Number of boosts added by the user
   */
  boost_count: number;
};

/**
 * The background is filled using the selected {@link BackgroundFillSolid.color | color}.
 */
export type BackgroundFillSolid = {
  /**
   * Type of the background fill, always “solid”
   */
  type: string;

  /**
   * The color of the background fill in the RGB24 format
   */
  color: number;
};

/**
 * The background is a gradient fill.
 */
export type BackgroundFillGradient = {
  /**
   * Type of the background fill, always “gradient”
   */
  type: string;

  /**
   * Top color of the gradient in the RGB24 format
   */
  top_color: number;

  /**
   * Bottom color of the gradient in the RGB24 format
   */
  bottom_color: number;

  /**
   * Clockwise rotation angle of the background fill in degrees; 0-359
   */
  rotation_angle: number;
};

/**
 * The background is a freeform gradient that rotates after every message in the chat.
 */
export type BackgroundFillFreeformGradient = {
  /**
   * Type of the background fill, always “freeform_gradient”
   */
  type: string;

  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
   */
  colors: number[];
};

/**
 * The background is automatically filled based on the selected colors.
 */
export type BackgroundTypeFill = {
  /**
   * Type of the background, always “fill”
   */
  type: string;

  /**
   * The background fill
   */
  fill: BackgroundFill;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;
};

/**
 * The background is a wallpaper in the JPEG format.
 */
export type BackgroundTypeWallpaper = {
  /**
   * Type of the background, always “wallpaper”
   */
  type: string;

  /**
   * Document with the wallpaper
   */
  document: Document;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;

  /**
   * True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
   */
  is_blurred?: true;

  /**
   * True, if the background moves slightly when the device is tilted
   */
  is_moving?: true;
};

/**
 * The background is a.PNG or.TGV (gzipped subset of SVG with MIME {@link BackgroundTypePattern.type | type} “application/x-tgwallpattern”) pattern to be combined with the background {@link BackgroundTypePattern.fill | fill} chosen by the user.
 */
export type BackgroundTypePattern = {
  /**
   * Type of the background, always “pattern”
   */
  type: string;

  /**
   * Document with the pattern
   */
  document: Document;

  /**
   * The background fill that is combined with the pattern
   */
  fill: BackgroundFill;

  /**
   * Intensity of the pattern when it is shown above the filled background; 0-100
   */
  intensity: number;

  /**
   * True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
   */
  is_inverted?: true;

  /**
   * True, if the background moves slightly when the device is tilted
   */
  is_moving?: true;
};

/**
 * The background is taken directly from a built-in chat theme.
 */
export type BackgroundTypeChatTheme = {
  /**
   * Type of the background, always “chat_theme”
   */
  type: string;

  /**
   * Name of the chat theme, which is usually an emoji
   */
  theme_name: string;
};

/**
 * This object represents a chat background.
 */
export type ChatBackground = {
  /**
   * Type of the background
   */
  type: BackgroundType;
};

/**
 * This object represents a service message about a new forum topic created in the chat.
 */
export type ForumTopicCreated = {
  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;

  /**
   * Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string;
};

export type ForumTopicClosed = Record<string, never>;

/**
 * This object represents a service message about an edited forum topic.
 */
export type ForumTopicEdited = {
  /**
   * New name of the topic, if it was edited
   */
  name?: string;

  /**
   * New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
   */
  icon_custom_emoji_id?: string;
};

export type ForumTopicReopened = Record<string, never>;

export type GeneralForumTopicHidden = Record<string, never>;

export type GeneralForumTopicUnhidden = Record<string, never>;

/**
 * This object contains information about a user that was shared with the bot using a {@link KeyboardButtonRequestUsers} button.
 */
export type SharedUser = {
  /**
   * Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
   */
  user_id: number;

  /**
   * First name of the user, if the name was requested by the bot
   */
  first_name?: string;

  /**
   * Last name of the user, if the name was requested by the bot
   */
  last_name?: string;

  /**
   * Username of the user, if the username was requested by the bot
   */
  username?: string;

  /**
   * Available sizes of the chat photo, if the photo was requested by the bot
   */
  photo?: PhotoSize[];
};

/**
 * This object contains information about the {@link UsersShared.users | users} whose identifiers were shared with the bot using a {@link KeyboardButtonRequestUsers} button.
 */
export type UsersShared = {
  /**
   * Identifier of the request
   */
  request_id: number;

  /**
   * Information about users shared with the bot.
   */
  users: SharedUser[];
};

/**
 * This object contains information about a chat that was shared with the bot using a {@link KeyboardButtonRequestChat} button.
 */
export type ChatShared = {
  /**
   * Identifier of the request
   */
  request_id: number;

  /**
   * Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
   */
  chat_id: number;

  /**
   * Title of the chat, if the title was requested by the bot.
   */
  title?: string;

  /**
   * Username of the chat, if the username was requested by the bot and available.
   */
  username?: string;

  /**
   * Available sizes of the chat photo, if the photo was requested by the bot
   */
  photo?: PhotoSize[];
};

/**
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | requestWriteAccess}.
 */
export type WriteAccessAllowed = {
  /**
   * True, if the access was granted after the user accepted an explicit request from a Web App sent by the method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | requestWriteAccess}
   */
  from_request?: boolean;

  /**
   * Name of the Web App, if the access was granted when the Web App was launched from a link
   */
  web_app_name?: string;

  /**
   * True, if the access was granted when the bot was added to the attachment or side menu
   */
  from_attachment_menu?: boolean;
};

/**
 * This object represents a service message about a video chat scheduled in the chat.
 */
export type VideoChatScheduled = {
  /**
   * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
   */
  start_date: number;
};

export type VideoChatStarted = Record<string, never>;

/**
 * This object represents a service message about a video chat ended in the chat.
 */
export type VideoChatEnded = {
  /**
   * Video chat duration in seconds
   */
  duration: number;
};

/**
 * This object represents a service message about new members invited to a video chat.
 */
export type VideoChatParticipantsInvited = {
  /**
   * New members that were invited to the video chat
   */
  users: User[];
};

/**
 * Describes a service message about a change in the price of paid messages within a chat.
 */
export type PaidMessagePriceChanged = {
  /**
   * The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message
   */
  paid_message_star_count: number;
};

/**
 * Describes a service message about a change in the price of direct messages sent to a channel chat.
 */
export type DirectMessagePriceChanged = {
  /**
   * True, if direct messages are enabled for the channel chat; false otherwise
   */
  are_direct_messages_enabled: boolean;

  /**
   * The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.
   */
  direct_message_star_count?: number;
};

/**
 * This object represents a service message about the creation of a scheduled giveaway.
 */
export type GiveawayCreated = {
  /**
   * The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;
};

/**
 * This object represents a message about a scheduled giveaway.
 */
export type Giveaway = {
  /**
   * The list of chats which the user must join to participate in the giveaway
   */
  chats: Chat[];

  /**
   * Point in time (Unix timestamp) when winners of the giveaway will be selected
   */
  winners_selection_date: number;

  /**
   * The number of users which are supposed to be selected as winners of the giveaway
   */
  winner_count: number;

  /**
   * True, if only users who join the chats after the giveaway started should be eligible to win
   */
  only_new_members?: true;

  /**
   * True, if the list of giveaway winners will be visible to everyone
   */
  has_public_winners?: true;

  /**
   * Description of additional giveaway prize
   */
  prize_description?: string;

  /**
   * A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
   */
  country_codes?: string[];

  /**
   * The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;

  /**
   * The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   */
  premium_subscription_month_count?: number;
};

/**
 * This object represents a message about the completion of a giveaway with public {@link GiveawayWinners.winners | winners}.
 */
export type GiveawayWinners = {
  /**
   * The chat that created the giveaway
   */
  chat: Chat;

  /**
   * Identifier of the message with the giveaway in the chat
   */
  giveaway_message_id: number;

  /**
   * Point in time (Unix timestamp) when winners of the giveaway were selected
   */
  winners_selection_date: number;

  /**
   * Total number of winners in the giveaway
   */
  winner_count: number;

  /**
   * List of up to 100 winners of the giveaway
   */
  winners: User[];

  /**
   * The number of other chats the user had to join in order to be eligible for the giveaway
   */
  additional_chat_count?: number;

  /**
   * The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;

  /**
   * The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   */
  premium_subscription_month_count?: number;

  /**
   * Number of undistributed prizes
   */
  unclaimed_prize_count?: number;

  /**
   * True, if only users who had joined the chats after the giveaway started were eligible to win
   */
  only_new_members?: true;

  /**
   * True, if the giveaway was canceled because the payment for it was refunded
   */
  was_refunded?: true;

  /**
   * Description of additional giveaway prize
   */
  prize_description?: string;
};

/**
 * This object represents a service message about the completion of a giveaway without public winners.
 */
export type GiveawayCompleted = {
  /**
   * Number of winners in the giveaway
   */
  winner_count: number;

  /**
   * Number of undistributed prizes
   */
  unclaimed_prize_count?: number;

  /**
   * {@link Message} with the giveaway that was completed, if it wasn't deleted
   */
  giveaway_message?: Message;

  /**
   * True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
   */
  is_star_giveaway?: true;
};

/**
 * Describes the options used for link preview generation.
 */
export type LinkPreviewOptions = {
  /**
   * True, if the link preview is disabled
   */
  is_disabled?: boolean;

  /**
   * URL to use for the link preview. If empty, then the first URL found in the message text will be used
   */
  url?: string;

  /**
   * True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   */
  prefer_small_media?: boolean;

  /**
   * True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   */
  prefer_large_media?: boolean;

  /**
   * True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
   */
  show_above_text?: boolean;
};

/**
 * This object represent a user's profile pictures.
 */
export type UserProfilePhotos = {
  /**
   * Total number of profile pictures the target user has
   */
  total_count: number;

  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: PhotoSize[][];
};

/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile. The maximum file size to download is 20 MB
 */
export type File = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * {@link File} size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;

  /**
   * {@link File} path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.
   */
  file_path?: string;
};

/**
 * Describes a {@link https://core.telegram.org/bots/webapps | Web App}.
 */
export type WebAppInfo = {
  /**
   * An HTTPS URL of a Web App to be opened with additional data as specified in {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | Initializing Web Apps}
   */
  url: string;
};

/**
 * This object represents a {@link https://core.telegram.org/bots/features#keyboards | custom keyboard} with reply options (see {@link https://core.telegram.org/bots/features#keyboards | Introduction to bots} for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export type ReplyKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of {@link KeyboardButton} objects
   */
  keyboard: KeyboardButton[][];

  /**
   * Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
   */
  is_persistent?: boolean;

  /**
   * Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
   */
  resize_keyboard?: boolean;

  /**
   * Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
   */
  one_time_keyboard?: boolean;

  /**
   * The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
   */
  input_field_placeholder?: string;

  /**
   * Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the {@link Message} object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
   */
  selective?: boolean;
};

/**
 * This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple {@link KeyboardButton.text | text} buttons, String can be used instead of this object to specify the button {@link KeyboardButton.text | text}.
 */
export type KeyboardButton = {
  /**
   * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
   */
  text: string;

  /**
   * If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.
   */
  request_users: KeyboardButtonRequestUsers;

  /**
   * If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.
   */
  request_chat: KeyboardButtonRequestChat;

  /**
   * If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
   */
  request_contact?: boolean;

  /**
   * If True, the user's current location will be sent when the button is pressed. Available in private chats only.
   */
  request_location?: boolean;

  /**
   * If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
   */
  request_poll?: KeyboardButtonPollType;

  /**
   * If specified, the described {@link https://core.telegram.org/bots/webapps | Web App} will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
   */
  web_app?: WebAppInfo;
};

/**
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. {@link https://core.telegram.org/bots/features#chat-and-user-selection | More about requesting users »}
 */
export type KeyboardButtonRequestUsers = {
  /**
   * Signed 32-bit identifier of the request that will be received back in the {@link UsersShared} object. Must be unique within the message
   */
  request_id: number;

  /**
   * Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.
   */
  user_is_bot?: boolean;

  /**
   * Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.
   */
  user_is_premium?: boolean;

  /**
   * The maximum number of users to be selected; 1-10. Defaults to 1.
   */
  max_quantity?: number;

  /**
   * Pass True to request the users' first and last names
   */
  request_name?: boolean;

  /**
   * Pass True to request the users' usernames
   */
  request_username?: boolean;

  /**
   * Pass True to request the users' photos
   */
  request_photo?: boolean;
};

/**
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. {@link https://core.telegram.org/bots/features#chat-and-user-selection | More about requesting chats »}.
 */
export type KeyboardButtonRequestChat = {
  /**
   * Signed 32-bit identifier of the request, which will be received back in the {@link ChatShared} object. Must be unique within the message
   */
  request_id: number;

  /**
   * Pass True to request a channel chat, pass False to request a group or a supergroup chat.
   */
  chat_is_channel: boolean;

  /**
   * Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
   */
  chat_is_forum?: boolean;

  /**
   * Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
   */
  chat_has_username?: boolean;

  /**
   * Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
   */
  chat_is_created?: boolean;

  /**
   * A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
   */
  user_administrator_rights?: ChatAdministratorRights;

  /**
   * A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
   */
  bot_administrator_rights?: ChatAdministratorRights;

  /**
   * Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
   */
  bot_is_member?: boolean;

  /**
   * Pass True to request the chat's title
   */
  request_title?: boolean;

  /**
   * Pass True to request the chat's username
   */
  request_username?: boolean;

  /**
   * Pass True to request the chat's photo
   */
  request_photo?: boolean;
};

/**
 * This object represents {@link KeyboardButtonPollType.type | type} of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 */
export type KeyboardButtonPollType = {
  /**
   * If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
   */
  type?: string;
};

/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export type ReplyKeyboardRemove = {
  /**
   * Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
   */
  remove_keyboard: true;

  /**
   * Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the {@link Message} object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
   */
  selective?: boolean;
};

/**
 * This object represents an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard} that appears right next to the message it belongs to.
 */
export type InlineKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of {@link InlineKeyboardButton} objects
   */
  inline_keyboard: InlineKeyboardButton[][];
};

/**
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
 */
export type InlineKeyboardButton = {
  /**
   * Label text on the button
   */
  text: string;

  /**
   * HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
   */
  url?: string;

  /**
   * Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
   */
  callback_data?: string;

  /**
   * Description of the {@link https://core.telegram.org/bots/webapps | Web App} that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
   */
  web_app?: WebAppInfo;

  /**
   * An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the {@link https://core.telegram.org/widgets/login | Telegram Login Widget}.
   */
  login_url?: LoginUrl;

  /**
   * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query?: string;

  /**
   * If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query_current_chat?: string;

  /**
   * If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;

  /**
   * Description of the button that copies the specified text to the clipboard.
   */
  copy_text?: CopyTextButton;

  /**
   * Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
   */
  callback_game?: CallbackGame;

  /**
   * Specify True, to send a Pay button. Substrings “⭐” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
   */
  pay?: boolean;
};

/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the {@link https://core.telegram.org/widgets/login | Telegram Login Widget} when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in: {@link https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c | TITLE} Telegram apps support these buttons as of version 5.7. Sample bot: @discussbot
 */
export type LoginUrl = {
  /**
   * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in {@link https://core.telegram.org/widgets/login#receiving-authorization-data | Receiving authorization data}.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in {@link https://core.telegram.org/widgets/login#checking-authorization | Checking authorization}.
   */
  url: string;

  /**
   * New text of the button in forwarded messages.
   */
  forward_text?: string;

  /**
   * Username of a bot, which will be used for user authorization. See {@link https://core.telegram.org/widgets/login#setting-up-a-bot | Setting up a bot} for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See {@link https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot | Linking your domain to the bot} for more details.
   */
  bot_username?: string;

  /**
   * Pass True to request the permission for your bot to send messages to the user.
   */
  request_write_access?: boolean;
};

/**
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline {@link SwitchInlineQueryChosenChat.query | query}.
 */
export type SwitchInlineQueryChosenChat = {
  /**
   * The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted
   */
  query?: string;

  /**
   * True, if private chats with users can be chosen
   */
  allow_user_chats?: boolean;

  /**
   * True, if private chats with bots can be chosen
   */
  allow_bot_chats?: boolean;

  /**
   * True, if group and supergroup chats can be chosen
   */
  allow_group_chats?: boolean;

  /**
   * True, if channel chats can be chosen
   */
  allow_channel_chats?: boolean;
};

/**
 * This object represents an inline keyboard button that copies specified {@link CopyTextButton.text | text} to the clipboard.
 */
export type CopyTextButton = {
  /**
   * The text to be copied to the clipboard; 1-256 characters
   */
  text: string;
};

/**
 * This object represents an incoming callback query {@link CallbackQuery.from | from} a callback button in an {@link https://core.telegram.org/bots/features#inline-keyboards | inline keyboard}. If the button that originated the query was attached to a {@link CallbackQuery.message | message} sent by the bot, the field {@link CallbackQuery.message | message} will be present. If the button was attached to a {@link CallbackQuery.message | message} sent via the bot (in inline mode), the field {@link CallbackQuery.inline_message_id | inline_message_id} will be present. Exactly one of the fields {@link CallbackQuery.data | data} or {@link CallbackQuery.game_short_name | game_short_name} will be present.
 */
export type CallbackQuery = {
  /**
   * Unique identifier for this query
   */
  id: string;

  /**
   * Sender
   */
  from: User;

  /**
   * {@link Message} sent by the bot with the callback button that originated the query
   */
  message?: MaybeInaccessibleMessage;

  /**
   * Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string;

  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
   */
  chat_instance: string;

  /**
   * Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
   */
  data?: string;

  /**
   * Short name of a {@link Game} to be returned, serves as the unique identifier for the game
   */
  game_short_name?: string;
};

/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice {@link https://core.telegram.org/bots/features#privacy-mode | privacy mode}. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export type ForceReply = {
  /**
   * Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
   */
  force_reply: true;

  /**
   * The placeholder to be shown in the input field when the reply is active; 1-64 characters
   */
  input_field_placeholder?: string;

  /**
   * Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the {@link Message} object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
   */
  selective?: boolean;
};

/**
 * This object represents a chat photo.
 */
export type ChatPhoto = {
  /**
   * File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  small_file_id: string;

  /**
   * Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  small_file_unique_id: string;

  /**
   * File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  big_file_id: string;

  /**
   * Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  big_file_unique_id: string;
};

/**
 * Represents an invite link for a chat.
 */
export type ChatInviteLink = {
  /**
   * The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
   */
  invite_link: string;

  /**
   * Creator of the link
   */
  creator: User;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators
   */
  creates_join_request: boolean;

  /**
   * True, if the link is primary
   */
  is_primary: boolean;

  /**
   * True, if the link is revoked
   */
  is_revoked: boolean;

  /**
   * Invite link name
   */
  name?: string;

  /**
   * Point in time (Unix timestamp) when the link will expire or has been expired
   */
  expire_date?: number;

  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number;

  /**
   * Number of pending join requests created using this link
   */
  pending_join_request_count?: number;

  /**
   * The number of seconds the subscription will be active for before the next payment
   */
  subscription_period?: number;

  /**
   * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
   */
  subscription_price?: number;
};

/**
 * Represents the rights of an administrator in a chat.
 */
export type ChatAdministratorRights = {
  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;

  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;

  /**
   * True, if the administrator can delete messages of other users
   */
  can_delete_messages: boolean;

  /**
   * True, if the administrator can manage video chats
   */
  can_manage_video_chats: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
   */
  can_promote_members: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;

  /**
   * True, if the administrator can post stories to the chat
   */
  can_post_stories: boolean;

  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories: boolean;

  /**
   * True, if the administrator can delete stories posted by other users
   */
  can_delete_stories: boolean;

  /**
   * True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   */
  can_post_messages?: boolean;

  /**
   * True, if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean;

  /**
   * True, if the user is allowed to pin messages; for groups and supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean;
};

/**
 * This object represents changes in the status of a {@link ChatMemberUpdated.chat | chat} member.
 */
export type ChatMemberUpdated = {
  /**
   * Chat the user belongs to
   */
  chat: Chat;

  /**
   * Performer of the action, which resulted in the change
   */
  from: User;

  /**
   * Date the change was done in Unix time
   */
  date: number;

  /**
   * Previous information about the chat member
   */
  old_chat_member: ChatMember;

  /**
   * New information about the chat member
   */
  new_chat_member: ChatMember;

  /**
   * {@link Chat} invite link, which was used by the user to join the chat; for joining by invite link events only.
   */
  invite_link?: ChatInviteLink;

  /**
   * True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
   */
  via_join_request?: boolean;

  /**
   * True, if the user joined the chat via a chat folder invite link
   */
  via_chat_folder_invite_link?: boolean;
};

/**
 * Represents a chat member that owns the chat and has all administrator privileges.
 */
export type ChatMemberOwner = {
  /**
   * The member's status in the chat, always “creator”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;

  /**
   * Custom title for this user
   */
  custom_title?: string;
};

/**
 * Represents a chat member that has some additional privileges.
 */
export type ChatMemberAdministrator = {
  /**
   * The member's status in the chat, always “administrator”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the bot is allowed to edit administrator privileges of that user
   */
  can_be_edited: boolean;

  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;

  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;

  /**
   * True, if the administrator can delete messages of other users
   */
  can_delete_messages: boolean;

  /**
   * True, if the administrator can manage video chats
   */
  can_manage_video_chats: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
   */
  can_promote_members: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;

  /**
   * True, if the administrator can post stories to the chat
   */
  can_post_stories: boolean;

  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories: boolean;

  /**
   * True, if the administrator can delete stories posted by other users
   */
  can_delete_stories: boolean;

  /**
   * True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   */
  can_post_messages?: boolean;

  /**
   * True, if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean;

  /**
   * True, if the user is allowed to pin messages; for groups and supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean;

  /**
   * Custom title for this user
   */
  custom_title?: string;
};

/**
 * Represents a chat member that has no additional privileges or restrictions.
 */
export type ChatMemberMember = {
  /**
   * The member's status in the chat, always “member”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * Date when the user's subscription will expire; Unix time
   */
  until_date?: number;
};

/**
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 */
export type ChatMemberRestricted = {
  /**
   * The member's status in the chat, always “restricted”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user is a member of the chat at the moment of the request
   */
  is_member: boolean;

  /**
   * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   */
  can_send_messages: boolean;

  /**
   * True, if the user is allowed to send audios
   */
  can_send_audios: boolean;

  /**
   * True, if the user is allowed to send documents
   */
  can_send_documents: boolean;

  /**
   * True, if the user is allowed to send photos
   */
  can_send_photos: boolean;

  /**
   * True, if the user is allowed to send videos
   */
  can_send_videos: boolean;

  /**
   * True, if the user is allowed to send video notes
   */
  can_send_video_notes: boolean;

  /**
   * True, if the user is allowed to send voice notes
   */
  can_send_voice_notes: boolean;

  /**
   * True, if the user is allowed to send polls and checklists
   */
  can_send_polls: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;

  /**
   * True, if the user is allowed to pin messages
   */
  can_pin_messages: boolean;

  /**
   * True, if the user is allowed to create forum topics
   */
  can_manage_topics: boolean;

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
   */
  until_date: number;
};

/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 */
export type ChatMemberLeft = {
  /**
   * The member's status in the chat, always “left”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;
};

/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 */
export type ChatMemberBanned = {
  /**
   * The member's status in the chat, always “kicked”
   */
  status: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
   */
  until_date: number;
};

/**
 * Represents a join request sent to a {@link ChatJoinRequest.chat | chat}.
 */
export type ChatJoinRequest = {
  /**
   * Chat to which the request was sent
   */
  chat: Chat;

  /**
   * User that sent the join request
   */
  from: User;

  /**
   * Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
   */
  user_chat_id: number;

  /**
   * Date the request was sent in Unix time
   */
  date: number;

  /**
   * Bio of the user.
   */
  bio?: string;

  /**
   * {@link Chat} invite link that was used by the user to send the join request
   */
  invite_link?: ChatInviteLink;
};

/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */
export type ChatPermissions = {
  /**
   * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   */
  can_send_messages?: boolean;

  /**
   * True, if the user is allowed to send audios
   */
  can_send_audios?: boolean;

  /**
   * True, if the user is allowed to send documents
   */
  can_send_documents?: boolean;

  /**
   * True, if the user is allowed to send photos
   */
  can_send_photos?: boolean;

  /**
   * True, if the user is allowed to send videos
   */
  can_send_videos?: boolean;

  /**
   * True, if the user is allowed to send video notes
   */
  can_send_video_notes?: boolean;

  /**
   * True, if the user is allowed to send voice notes
   */
  can_send_voice_notes?: boolean;

  /**
   * True, if the user is allowed to send polls and checklists
   */
  can_send_polls?: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages?: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews?: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
   */
  can_change_info?: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users?: boolean;

  /**
   * True, if the user is allowed to pin messages. Ignored in public supergroups
   */
  can_pin_messages?: boolean;

  /**
   * True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
   */
  can_manage_topics?: boolean;
};

/**
 * Describes the birthdate of a user.
 */
export type Birthdate = {
  /**
   * Day of the user's birth; 1-31
   */
  day: number;

  /**
   * Month of the user's birth; 1-12
   */
  month: number;

  /**
   * Year of the user's birth
   */
  year?: number;
};

/**
 * Contains information about the start page settings of a Telegram Business account.
 */
export type BusinessIntro = {
  /**
   * Title text of the business intro
   */
  title?: string;

  /**
   * {@link Message} text of the business intro
   */
  message?: string;

  /**
   * {@link Sticker} of the business intro
   */
  sticker?: Sticker;
};

/**
 * Contains information about the {@link BusinessLocation.location | location} of a Telegram Business account.
 */
export type BusinessLocation = {
  /**
   * Address of the business
   */
  address: string;

  /**
   * {@link Location} of the business
   */
  location?: Location;
};

/**
 * Describes an interval of time during which a business is open.
 */
export type BusinessOpeningHoursInterval = {
  /**
   * The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
   */
  opening_minute: number;

  /**
   * The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
   */
  closing_minute: number;
};

/**
 * Describes the opening hours of a business.
 */
export type BusinessOpeningHours = {
  /**
   * Unique name of the time zone for which the opening hours are defined
   */
  time_zone_name: string;

  /**
   * List of time intervals describing business opening hours
   */
  opening_hours: BusinessOpeningHoursInterval[];
};

/**
 * Describes the position of a clickable area within a story.
 */
export type StoryAreaPosition = {
  /**
   * The abscissa of the area's center, as a percentage of the media width
   */
  x_percentage: number;

  /**
   * The ordinate of the area's center, as a percentage of the media height
   */
  y_percentage: number;

  /**
   * The width of the area's rectangle, as a percentage of the media width
   */
  width_percentage: number;

  /**
   * The height of the area's rectangle, as a percentage of the media height
   */
  height_percentage: number;

  /**
   * The clockwise rotation angle of the rectangle, in degrees; 0-360
   */
  rotation_angle: number;

  /**
   * The radius of the rectangle corner rounding, as a percentage of the media width
   */
  corner_radius_percentage: number;
};

/**
 * Describes the physical address of a location.
 */
export type LocationAddress = {
  /**
   * The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located
   */
  country_code: string;

  /**
   * State of the location
   */
  state?: string;

  /**
   * City of the location
   */
  city?: string;

  /**
   * Street address of the location
   */
  street?: string;
};

/**
 * Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.
 */
export type StoryAreaTypeLocation = {
  /**
   * Type of the area, always “location”
   */
  type: string;

  /**
   * Location latitude in degrees
   */
  latitude: number;

  /**
   * Location longitude in degrees
   */
  longitude: number;

  /**
   * Address of the location
   */
  address?: LocationAddress;
};

/**
 * Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.
 */
export type StoryAreaTypeSuggestedReaction = {
  /**
   * Type of the area, always “suggested_reaction”
   */
  type: string;

  /**
   * Type of the reaction
   */
  reaction_type: ReactionType;

  /**
   * Pass True if the reaction area has a dark background
   */
  is_dark?: boolean;

  /**
   * Pass True if reaction area corner is flipped
   */
  is_flipped?: boolean;
};

/**
 * Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.
 */
export type StoryAreaTypeLink = {
  /**
   * Type of the area, always “link”
   */
  type: string;

  /**
   * HTTP or tg:// URL to be opened when the area is clicked
   */
  url: string;
};

/**
 * Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.
 */
export type StoryAreaTypeWeather = {
  /**
   * Type of the area, always “weather”
   */
  type: string;

  /**
   * Temperature, in degree Celsius
   */
  temperature: number;

  /**
   * Emoji representing the weather
   */
  emoji: string;

  /**
   * A color of the area background in the ARGB format
   */
  background_color: number;
};

/**
 * Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.
 */
export type StoryAreaTypeUniqueGift = {
  /**
   * Type of the area, always “unique_gift”
   */
  type: string;

  /**
   * Unique name of the gift
   */
  name: string;
};

/**
 * Describes a clickable area on a story media.
 */
export type StoryArea = {
  /**
   * Position of the area
   */
  position: StoryAreaPosition;

  /**
   * Type of the area
   */
  type: StoryAreaType;
};

/**
 * Represents a {@link ChatLocation.location | location} to which a chat is connected.
 */
export type ChatLocation = {
  /**
   * The location to which the supergroup is connected. Can't be a live location.
   */
  location: Location;

  /**
   * Location address; 1-64 characters, as defined by the chat owner
   */
  address: string;
};

/**
 * The reaction is based on an {@link ReactionTypeEmoji.emoji | emoji}.
 */
export type ReactionTypeEmoji = {
  /**
   * Type of the reaction, always “emoji”
   */
  type: string;

  /**
   * Reaction emoji. Currently, it can be one of "❤", "👍", "👎", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🤬", "😢", "🎉", "🤩", "🤮", "💩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🐳", "❤‍🔥", "🌚", "🌭", "💯", "🤣", "⚡", "🍌", "🏆", "💔", "🤨", "😐", "🍓", "🍾", "💋", "🖕", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🎃", "🙈", "😇", "😨", "🤝", "✍", "🤗", "🫡", "🎅", "🎄", "☃", "💅", "🤪", "🗿", "🆒", "💘", "🙉", "🦄", "😘", "💊", "🙊", "😎", "👾", "🤷‍♂", "🤷", "🤷‍♀", "😡"
   */
  emoji: string;
};

/**
 * The reaction is based on a custom emoji.
 */
export type ReactionTypeCustomEmoji = {
  /**
   * Type of the reaction, always “custom_emoji”
   */
  type: string;

  /**
   * Custom emoji identifier
   */
  custom_emoji_id: string;
};

/**
 * The reaction is paid.
 */
export type ReactionTypePaid = {
  /**
   * Type of the reaction, always “paid”
   */
  type: string;
};

/**
 * Represents a reaction added to a message along with the number of times it was added.
 */
export type ReactionCount = {
  /**
   * Type of the reaction
   */
  type: ReactionType;

  /**
   * Number of times the reaction was added
   */
  total_count: number;
};

/**
 * This object represents a change of a reaction on a message performed by a {@link MessageReactionUpdated.user | user}.
 */
export type MessageReactionUpdated = {
  /**
   * The chat containing the message the user reacted to
   */
  chat: Chat;

  /**
   * Unique identifier of the message inside the chat
   */
  message_id: number;

  /**
   * The user that changed the reaction, if the user isn't anonymous
   */
  user?: User;

  /**
   * The chat on behalf of which the reaction was changed, if the user is anonymous
   */
  actor_chat?: Chat;

  /**
   * Date of the change in Unix time
   */
  date: number;

  /**
   * Previous list of reaction types that were set by the user
   */
  old_reaction: ReactionType[];

  /**
   * New list of reaction types that have been set by the user
   */
  new_reaction: ReactionType[];
};

/**
 * This object represents reaction changes on a message with anonymous {@link MessageReactionCountUpdated.reactions | reactions}.
 */
export type MessageReactionCountUpdated = {
  /**
   * The chat containing the message
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Date of the change in Unix time
   */
  date: number;

  /**
   * List of reactions that are present on the message
   */
  reactions: ReactionCount[];
};

/**
 * This object represents a forum topic.
 */
export type ForumTopic = {
  /**
   * Unique identifier of the forum topic
   */
  message_thread_id: number;

  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;

  /**
   * Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string;
};

/**
 * This object represents a gift that can be sent by the bot.
 */
export type Gift = {
  /**
   * Unique identifier of the gift
   */
  id: string;

  /**
   * The sticker that represents the gift
   */
  sticker: Sticker;

  /**
   * The number of Telegram Stars that must be paid to send the sticker
   */
  star_count: number;

  /**
   * The number of Telegram Stars that must be paid to upgrade the gift to a unique one
   */
  upgrade_star_count?: number;

  /**
   * The total number of the gifts of this type that can be sent; for limited gifts only
   */
  total_count?: number;

  /**
   * The number of remaining gifts of this type that can be sent; for limited gifts only
   */
  remaining_count?: number;
};

/**
 * This object represent a list of {@link Gifts.gifts | gifts}.
 */
export type Gifts = {
  /**
   * The list of gifts
   */
  gifts: Gift[];
};

/**
 * This object describes the model of a unique gift.
 */
export type UniqueGiftModel = {
  /**
   * Name of the model
   */
  name: string;

  /**
   * The sticker that represents the unique gift
   */
  sticker: Sticker;

  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};

/**
 * This object describes the symbol shown on the pattern of a unique gift.
 */
export type UniqueGiftSymbol = {
  /**
   * Name of the symbol
   */
  name: string;

  /**
   * The sticker that represents the unique gift
   */
  sticker: Sticker;

  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};

/**
 * This object describes the colors of the backdrop of a unique gift.
 */
export type UniqueGiftBackdropColors = {
  /**
   * The color in the center of the backdrop in RGB format
   */
  center_color: number;

  /**
   * The color on the edges of the backdrop in RGB format
   */
  edge_color: number;

  /**
   * The color to be applied to the symbol in RGB format
   */
  symbol_color: number;

  /**
   * The color for the text on the backdrop in RGB format
   */
  text_color: number;
};

/**
 * This object describes the backdrop of a unique gift.
 */
export type UniqueGiftBackdrop = {
  /**
   * Name of the backdrop
   */
  name: string;

  /**
   * Colors of the backdrop
   */
  colors: UniqueGiftBackdropColors;

  /**
   * The number of unique gifts that receive this backdrop for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};

/**
 * This object describes a unique gift that was upgraded from a regular gift.
 */
export type UniqueGift = {
  /**
   * Human-readable name of the regular gift from which this unique gift was upgraded
   */
  base_name: string;

  /**
   * Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas
   */
  name: string;

  /**
   * Unique number of the upgraded gift among gifts upgraded from the same regular gift
   */
  number: number;

  /**
   * Model of the gift
   */
  model: UniqueGiftModel;

  /**
   * Symbol of the gift
   */
  symbol: UniqueGiftSymbol;

  /**
   * Backdrop of the gift
   */
  backdrop: UniqueGiftBackdrop;
};

/**
 * Describes a service message about a regular {@link GiftInfo.gift | gift} that was sent or received.
 */
export type GiftInfo = {
  /**
   * Information about the gift
   */
  gift: Gift;

  /**
   * Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
   */
  owned_gift_id?: string;

  /**
   * Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible
   */
  convert_star_count?: number;

  /**
   * Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number;

  /**
   * True, if the gift can be upgraded to a unique gift
   */
  can_be_upgraded?: true;

  /**
   * Text of the message that was added to the gift
   */
  text?: string;

  /**
   * Special entities that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   */
  is_private?: true;
};

/**
 * Describes a service message about a unique {@link UniqueGiftInfo.gift | gift} that was sent or received.
 */
export type UniqueGiftInfo = {
  /**
   * Information about the gift
   */
  gift: UniqueGift;

  /**
   * Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, or “resale” for gifts bought from other users
   */
  origin: string;

  /**
   * For gifts bought from other users, the price paid for the gift
   */
  last_resale_star_count?: number;

  /**
   * Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
   */
  owned_gift_id?: string;

  /**
   * Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   */
  transfer_star_count?: number;

  /**
   * Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now
   */
  next_transfer_date?: number;
};

/**
 * Describes a regular {@link OwnedGiftRegular.gift | gift} owned by a user or a chat.
 */
export type OwnedGiftRegular = {
  /**
   * Type of the gift, always “regular”
   */
  type: string;

  /**
   * Information about the regular gift
   */
  gift: Gift;

  /**
   * Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
   */
  owned_gift_id?: string;

  /**
   * Sender of the gift if it is a known user
   */
  sender_user?: User;

  /**
   * Date the gift was sent in Unix time
   */
  send_date: number;

  /**
   * Text of the message that was added to the gift
   */
  text?: string;

  /**
   * Special entities that appear in the text
   */
  entities?: MessageEntity[];

  /**
   * True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   */
  is_private?: true;

  /**
   * True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   */
  is_saved?: true;

  /**
   * True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
   */
  can_be_upgraded?: true;

  /**
   * True, if the gift was refunded and isn't available anymore
   */
  was_refunded?: true;

  /**
   * Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
   */
  convert_star_count?: number;

  /**
   * Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number;
};

/**
 * Describes a unique {@link OwnedGiftUnique.gift | gift} received and owned by a user or a chat.
 */
export type OwnedGiftUnique = {
  /**
   * Type of the gift, always “unique”
   */
  type: string;

  /**
   * Information about the unique gift
   */
  gift: UniqueGift;

  /**
   * Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only
   */
  owned_gift_id?: string;

  /**
   * Sender of the gift if it is a known user
   */
  sender_user?: User;

  /**
   * Date the gift was sent in Unix time
   */
  send_date: number;

  /**
   * True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   */
  is_saved?: true;

  /**
   * True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only
   */
  can_be_transferred?: true;

  /**
   * Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   */
  transfer_star_count?: number;

  /**
   * Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now
   */
  next_transfer_date?: number;
};

/**
 * Contains the list of {@link OwnedGifts.gifts | gifts} received and owned by a user or a chat.
 */
export type OwnedGifts = {
  /**
   * The total number of gifts owned by the user or the chat
   */
  total_count: number;

  /**
   * The list of gifts
   */
  gifts: OwnedGift[];

  /**
   * Offset for the next request. If empty, then there are no more results
   */
  next_offset?: string;
};

/**
 * This object describes the types of gifts that can be gifted to a user or a chat.
 */
export type AcceptedGiftTypes = {
  /**
   * True, if unlimited regular gifts are accepted
   */
  unlimited_gifts: boolean;

  /**
   * True, if limited regular gifts are accepted
   */
  limited_gifts: boolean;

  /**
   * True, if unique gifts or gifts that can be upgraded to unique for free are accepted
   */
  unique_gifts: boolean;

  /**
   * True, if a Telegram Premium subscription is accepted
   */
  premium_subscription: boolean;
};

/**
 * Describes an {@link StarAmount.amount | amount} of Telegram Stars.
 */
export type StarAmount = {
  /**
   * Integer amount of Telegram Stars, rounded to 0; can be negative
   */
  amount: number;

  /**
   * The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive
   */
  nanostar_amount?: number;
};

/**
 * This object represents a bot {@link BotCommand.command | command}.
 */
export type BotCommand = {
  /**
   * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   */
  command: string;

  /**
   * Description of the command; 1-256 characters.
   */
  description: string;
};

/**
 * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
 */
export type BotCommandScopeDefault = {
  /**
   * Scope type, must be default
   */
  type: 'default';
};

/**
 * Represents the scope of bot commands, covering all private chats.
 */
export type BotCommandScopeAllPrivateChats = {
  /**
   * Scope type, must be all_private_chats
   */
  type: 'all_private_chats';
};

/**
 * Represents the scope of bot commands, covering all group and supergroup chats.
 */
export type BotCommandScopeAllGroupChats = {
  /**
   * Scope type, must be all_group_chats
   */
  type: 'all_group_chats';
};

/**
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 */
export type BotCommandScopeAllChatAdministrators = {
  /**
   * Scope type, must be all_chat_administrators
   */
  type: 'all_chat_administrators';
};

/**
 * Represents the scope of bot commands, covering a specific chat.
 */
export type BotCommandScopeChat = {
  /**
   * Scope type, must be chat
   */
  type: 'chat';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 */
export type BotCommandScopeChatAdministrators = {
  /**
   * Scope type, must be chat_administrators
   */
  type: 'chat_administrators';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};

/**
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 */
export type BotCommandScopeChatMember = {
  /**
   * Scope type, must be chat_member
   */
  type: 'chat_member';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;

  /**
   * Unique identifier of the target user
   */
  user_id: number;
};

/**
 * This object represents the bot's {@link BotName.name | name}.
 */
export type BotName = {
  /**
   * The bot's name
   */
  name: string;
};

/**
 * This object represents the bot's {@link BotDescription.description | description}.
 */
export type BotDescription = {
  /**
   * The bot's description
   */
  description: string;
};

/**
 * This object represents the bot's short description.
 */
export type BotShortDescription = {
  /**
   * The bot's short description
   */
  short_description: string;
};

/**
 * Represents a menu button, which opens the bot's list of commands.
 */
export type MenuButtonCommands = {
  /**
   * Type of the button, must be commands
   */
  type: 'commands';
};

/**
 * Represents a menu button, which launches a {@link https://core.telegram.org/bots/webapps | Web App}.
 */
export type MenuButtonWebApp = {
  /**
   * Type of the button, must be web_app
   */
  type: 'web_app';

  /**
   * Text on the button
   */
  text: string;

  /**
   * Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.
   */
  web_app: WebAppInfo;
};

/**
 * Describes that no specific value for the menu button was set.
 */
export type MenuButtonDefault = {
  /**
   * Type of the button, must be default
   */
  type: 'default';
};

/**
 * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another {@link ChatBoostSourcePremium.user | user}.
 */
export type ChatBoostSourcePremium = {
  /**
   * Source of the boost, always “premium”
   */
  source: string;

  /**
   * User that boosted the chat
   */
  user: User;
};

/**
 * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 */
export type ChatBoostSourceGiftCode = {
  /**
   * Source of the boost, always “gift_code”
   */
  source: string;

  /**
   * User for which the gift code was created
   */
  user: User;
};

/**
 * The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and {@link ChatBoostSourceGiveaway.prize_star_count | prize_star_count} / 500 times for one year for Telegram Star giveaways.
 */
export type ChatBoostSourceGiveaway = {
  /**
   * Source of the boost, always “giveaway”
   */
  source: string;

  /**
   * Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
   */
  giveaway_message_id: number;

  /**
   * {@link User} that won the prize in the giveaway if any; for Telegram Premium giveaways only
   */
  user?: User;

  /**
   * The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;

  /**
   * True, if the giveaway was completed, but there was no user to win the prize
   */
  is_unclaimed?: true;
};

/**
 * This object contains information about a chat boost.
 */
export type ChatBoost = {
  /**
   * Unique identifier of the boost
   */
  boost_id: string;

  /**
   * Point in time (Unix timestamp) when the chat was boosted
   */
  add_date: number;

  /**
   * Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
   */
  expiration_date: number;

  /**
   * Source of the added boost
   */
  source: ChatBoostSource;
};

/**
 * This object represents a {@link ChatBoostUpdated.boost | boost} added to a {@link ChatBoostUpdated.chat | chat} or changed.
 */
export type ChatBoostUpdated = {
  /**
   * Chat which was boosted
   */
  chat: Chat;

  /**
   * Information about the chat boost
   */
  boost: ChatBoost;
};

/**
 * This object represents a boost removed from a {@link ChatBoostRemoved.chat | chat}.
 */
export type ChatBoostRemoved = {
  /**
   * Chat which was boosted
   */
  chat: Chat;

  /**
   * Unique identifier of the boost
   */
  boost_id: string;

  /**
   * Point in time (Unix timestamp) when the boost was removed
   */
  remove_date: number;

  /**
   * Source of the removed boost
   */
  source: ChatBoostSource;
};

/**
 * This object represents a list of {@link UserChatBoosts.boosts | boosts} added to a chat by a user.
 */
export type UserChatBoosts = {
  /**
   * The list of boosts added to the chat by the user
   */
  boosts: ChatBoost[];
};

/**
 * Represents the rights of a business bot.
 */
export type BusinessBotRights = {
  /**
   * True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
   */
  can_reply?: true;

  /**
   * True, if the bot can mark incoming private messages as read
   */
  can_read_messages?: true;

  /**
   * True, if the bot can delete messages sent by the bot
   */
  can_delete_sent_messages?: true;

  /**
   * True, if the bot can delete all private messages in managed chats
   */
  can_delete_all_messages?: true;

  /**
   * True, if the bot can edit the first and last name of the business account
   */
  can_edit_name?: true;

  /**
   * True, if the bot can edit the bio of the business account
   */
  can_edit_bio?: true;

  /**
   * True, if the bot can edit the profile photo of the business account
   */
  can_edit_profile_photo?: true;

  /**
   * True, if the bot can edit the username of the business account
   */
  can_edit_username?: true;

  /**
   * True, if the bot can change the privacy settings pertaining to gifts for the business account
   */
  can_change_gift_settings?: true;

  /**
   * True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
   */
  can_view_gifts_and_stars?: true;

  /**
   * True, if the bot can convert regular gifts owned by the business account to Telegram Stars
   */
  can_convert_gifts_to_stars?: true;

  /**
   * True, if the bot can transfer and upgrade gifts owned by the business account
   */
  can_transfer_and_upgrade_gifts?: true;

  /**
   * True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
   */
  can_transfer_stars?: true;

  /**
   * True, if the bot can post, edit and delete stories on behalf of the business account
   */
  can_manage_stories?: true;
};

/**
 * Describes the connection of the bot with a business account.
 */
export type BusinessConnection = {
  /**
   * Unique identifier of the business connection
   */
  id: string;

  /**
   * Business account user that created the business connection
   */
  user: User;

  /**
   * Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  user_chat_id: number;

  /**
   * Date the connection was established in Unix time
   */
  date: number;

  /**
   * Rights of the business bot
   */
  rights?: BusinessBotRights;

  /**
   * True, if the connection is active
   */
  is_enabled: boolean;
};

/**
 * This object is received when messages are deleted from a connected business account.
 */
export type BusinessMessagesDeleted = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;

  /**
   * Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
   */
  chat: Chat;

  /**
   * The list of identifiers of deleted messages in the chat of the business account
   */
  message_ids: number[];
};

/**
 * Describes why a request was unsuccessful.
 */
export type ResponseParameters = {
  /**
   * The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
   */
  retry_after?: number;
};

/**
 * Represents a photo to be sent.
 */
export type InputMediaPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: 'photo';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
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
};

/**
 * Represents a video to be sent.
 */
export type InputMediaVideo = {
  /**
   * Type of the result, must be video
   */
  type: 'video';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: string;

  /**
   * Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  cover?: string;

  /**
   * Start timestamp for the video in the message
   */
  start_timestamp?: number;

  /**
   * Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link Video} width
   */
  width?: number;

  /**
   * {@link Video} height
   */
  height?: number;

  /**
   * {@link Video} duration in seconds
   */
  duration?: number;

  /**
   * Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean;

  /**
   * Pass True if the video needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;
};

/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 */
export type InputMediaAnimation = {
  /**
   * Type of the result, must be animation
   */
  type: 'animation';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: string;

  /**
   * Caption of the animation to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the animation caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link Animation} width
   */
  width?: number;

  /**
   * {@link Animation} height
   */
  height?: number;

  /**
   * {@link Animation} duration in seconds
   */
  duration?: number;

  /**
   * Pass True if the animation needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean;
};

/**
 * Represents an audio file to be treated as music to be sent.
 */
export type InputMediaAudio = {
  /**
   * Type of the result, must be audio
   */
  type: 'audio';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: string;

  /**
   * Caption of the audio to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Duration of the audio in seconds
   */
  duration?: number;

  /**
   * Performer of the audio
   */
  performer?: string;

  /**
   * Title of the audio
   */
  title?: string;
};

/**
 * Represents a general file to be sent.
 */
export type InputMediaDocument = {
  /**
   * Type of the result, must be document
   */
  type: 'document';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: string;

  /**
   * Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
   */
  disable_content_type_detection?: boolean;
};

/**
 * The paid {@link InputPaidMediaPhoto.media | media} to send is a photo.
 */
export type InputPaidMediaPhoto = {
  /**
   * Type of the media, must be photo
   */
  type: 'photo';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;
};

/**
 * The paid {@link InputPaidMediaVideo.media | media} to send is a video.
 */
export type InputPaidMediaVideo = {
  /**
   * Type of the media, must be video
   */
  type: 'video';

  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  thumbnail?: string;

  /**
   * Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  cover?: string;

  /**
   * Start timestamp for the video in the message
   */
  start_timestamp?: number;

  /**
   * {@link Video} width
   */
  width?: number;

  /**
   * {@link Video} height
   */
  height?: number;

  /**
   * {@link Video} duration in seconds
   */
  duration?: number;

  /**
   * Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean;
};

/**
 * A static profile {@link InputProfilePhotoStatic.photo | photo} in the.JPG format.
 */
export type InputProfilePhotoStatic = {
  /**
   * Type of the profile photo, must be static
   */
  type: 'static';

  /**
   * The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  photo: string;
};

/**
 * An animated profile photo in the MPEG4 format.
 */
export type InputProfilePhotoAnimated = {
  /**
   * Type of the profile photo, must be animated
   */
  type: 'animated';

  /**
   * The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  animation: string;

  /**
   * Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
   */
  main_frame_timestamp?: number;
};

/**
 * Describes a {@link InputStoryContentPhoto.photo | photo} to post as a story.
 */
export type InputStoryContentPhoto = {
  /**
   * Type of the content, must be photo
   */
  type: 'photo';

  /**
   * The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  photo: string;
};

/**
 * Describes a {@link InputStoryContentVideo.video | video} to post as a story.
 */
export type InputStoryContentVideo = {
  /**
   * Type of the content, must be video
   */
  type: 'video';

  /**
   * The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the video was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
   */
  video: string;

  /**
   * Precise duration of the video in seconds; 0-60
   */
  duration?: number;

  /**
   * Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
   */
  cover_frame_timestamp?: number;

  /**
   * Pass True if the video has no sound
   */
  is_animation?: boolean;
};

export type MaybeInaccessibleMessage = Message | InaccessibleMessage;

export type MessageOrigin =
  | MessageOriginUser
  | MessageOriginHiddenUser
  | MessageOriginChat
  | MessageOriginChannel;

export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

export type BackgroundFill =
  | BackgroundFillSolid
  | BackgroundFillGradient
  | BackgroundFillFreeformGradient;

export type BackgroundType =
  | BackgroundTypeFill
  | BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeChatTheme;

export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;

export type StoryAreaType =
  | StoryAreaTypeLocation
  | StoryAreaTypeSuggestedReaction
  | StoryAreaTypeLink
  | StoryAreaTypeWeather
  | StoryAreaTypeUniqueGift;

export type ReactionType =
  | ReactionTypeEmoji
  | ReactionTypeCustomEmoji
  | ReactionTypePaid;

export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;

export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;

export type MenuButton =
  | MenuButtonCommands
  | MenuButtonWebApp
  | MenuButtonDefault;

export type ChatBoostSource =
  | ChatBoostSourcePremium
  | ChatBoostSourceGiftCode
  | ChatBoostSourceGiveaway;

export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;

export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;

export type InputProfilePhoto =
  | InputProfilePhotoStatic
  | InputProfilePhotoAnimated;

export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;

/**
 * This object represents a sticker.
 */
export type Sticker = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
   */
  type: string;

  /**
   * Sticker width
   */
  width: number;

  /**
   * Sticker height
   */
  height: number;

  /**
   * True, if the sticker is animated
   */
  is_animated: boolean;

  /**
   * True, if the sticker is a video sticker
   */
  is_video: boolean;

  /**
   * {@link Sticker} thumbnail in the.WEBP or.JPG format
   */
  thumbnail?: PhotoSize;

  /**
   * Emoji associated with the sticker
   */
  emoji?: string;

  /**
   * Name of the sticker set to which the sticker belongs
   */
  set_name?: string;

  /**
   * For premium regular stickers, premium animation for the sticker
   */
  premium_animation?: File;

  /**
   * For mask stickers, the position where the mask should be placed
   */
  mask_position?: MaskPosition;

  /**
   * For custom emoji stickers, unique identifier of the custom emoji
   */
  custom_emoji_id?: string;

  /**
   * True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
   */
  needs_repainting?: true;

  /**
   * {@link File} size in bytes
   */
  file_size?: number;
};

/**
 * This object represents a sticker set.
 */
export type StickerSet = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title
   */
  title: string;

  /**
   * Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”
   */
  sticker_type: string;

  /**
   * List of all set stickers
   */
  stickers: Sticker[];

  /**
   * {@link Sticker} set thumbnail in the.WEBP,.TGS, or.WEBM format
   */
  thumbnail?: PhotoSize;
};

/**
 * This object describes the position on faces where a mask should be placed by default.
 */
export type MaskPosition = {
  /**
   * The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
   */
  point: string;

  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
   */
  x_shift: number;

  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
   */
  y_shift: number;

  /**
   * Mask scaling coefficient. For example, 2.0 means double size.
   */
  scale: number;
};

/**
 * This object describes a {@link InputSticker.sticker | sticker} to be added to a {@link InputSticker.sticker | sticker} set.
 */
export type InputSticker = {
  /**
   * The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new file using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files »
   */
  sticker: string;

  /**
   * Format of the added sticker, must be one of “static” for a.WEBP or.PNG image, “animated” for a.TGS animation, “video” for a.WEBM video
   */
  format: 'static' | 'animated' | 'video';

  /**
   * List of 1-20 emoji associated with the sticker
   */
  emoji_list: string[];

  /**
   * Position where the mask should be placed on faces. For “mask” stickers only.
   */
  mask_position?: MaskPosition;

  /**
   * List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.
   */
  keywords?: string[];
};

/**
 * This object represents an incoming inline {@link InlineQuery.query | query}. When the user sends an empty {@link InlineQuery.query | query}, your bot could return some default or trending results.
 */
export type InlineQuery = {
  /**
   * Unique identifier for this query
   */
  id: string;

  /**
   * Sender
   */
  from: User;

  /**
   * Text of the query (up to 256 characters)
   */
  query: string;

  /**
   * Offset of the results to be returned, can be controlled by the bot
   */
  offset: string;

  /**
   * Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
   */
  chat_type?: string;

  /**
   * Sender location, only for bots that request user location
   */
  location?: Location;
};

/**
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 */
export type InlineQueryResultsButton = {
  /**
   * Label text on the button
   */
  text: string;

  /**
   * Description of the {@link https://core.telegram.org/bots/webapps | Web App} that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method {@link https://core.telegram.org/bots/webapps#initializing-mini-apps | switchInlineQuery} inside the Web App.
   */
  web_app?: WebAppInfo;

  /**
   * {@link https://core.telegram.org/bots/features#deep-linking | Deep-linking} parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   */
  start_parameter?: string;
};

/**
 * Represents a link to an article or web page.
 */
export type InlineQueryResultArticle = {
  /**
   * Type of the result, must be article
   */
  type: 'article';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Title of the result
   */
  title: string;

  /**
   * Content of the message to be sent
   */
  input_message_content: InputMessageContent;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * URL of the result
   */
  url?: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Url of the thumbnail for the result
   */
  thumbnail_url?: string;

  /**
   * Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Thumbnail height
   */
  thumbnail_height?: number;
};

/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional {@link InlineQueryResultPhoto.caption | caption}. Alternatively, you can use {@link InlineQueryResultPhoto.input_message_content | input_message_content} to send a message with the specified content instead of the photo.
 */
export type InlineQueryResultPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: 'photo';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB
   */
  photo_url: string;

  /**
   * URL of the thumbnail for the photo
   */
  thumbnail_url: string;

  /**
   * Width of the photo
   */
  photo_width?: number;

  /**
   * Height of the photo
   */
  photo_height?: number;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the photo
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional {@link InlineQueryResultGif.caption | caption}. Alternatively, you can use {@link InlineQueryResultGif.input_message_content | input_message_content} to send a message with the specified content instead of the animation.
 */
export type InlineQueryResultGif = {
  /**
   * Type of the result, must be gif
   */
  type: 'gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the GIF file
   */
  gif_url: string;

  /**
   * Width of the GIF
   */
  gif_width?: number;

  /**
   * Height of the GIF
   */
  gif_height?: number;

  /**
   * Duration of the GIF in seconds
   */
  gif_duration?: number;

  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumbnail_url: string;

  /**
   * MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
   */
  thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4';

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the GIF animation
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional {@link InlineQueryResultMpeg4Gif.caption | caption}. Alternatively, you can use {@link InlineQueryResultMpeg4Gif.input_message_content | input_message_content} to send a message with the specified content instead of the animation.
 */
export type InlineQueryResultMpeg4Gif = {
  /**
   * Type of the result, must be mpeg4_gif
   */
  type: 'mpeg4_gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the MPEG4 file
   */
  mpeg4_url: string;

  /**
   * {@link Video} width
   */
  mpeg4_width?: number;

  /**
   * {@link Video} height
   */
  mpeg4_height?: number;

  /**
   * {@link Video} duration in seconds
   */
  mpeg4_duration?: number;

  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumbnail_url: string;

  /**
   * MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
   */
  thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4';

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the video animation
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional {@link InlineQueryResultVideo.caption | caption}. Alternatively, you can use {@link InlineQueryResultVideo.input_message_content | input_message_content} to send a message with the specified content instead of the video. If an {@link InlineQueryResultVideo} message contains an embedded video (e.g., YouTube), you must replace its content using {@link InlineQueryResultVideo.input_message_content | input_message_content}.
 */
export type InlineQueryResultVideo = {
  /**
   * Type of the result, must be video
   */
  type: 'video';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the embedded video player or video file
   */
  video_url: string;

  /**
   * MIME type of the content of the video URL, “text/html” or “video/mp4”
   */
  mime_type: string;

  /**
   * URL of the thumbnail (JPEG only) for the video
   */
  thumbnail_url: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link Video} width
   */
  video_width?: number;

  /**
   * {@link Video} height
   */
  video_height?: number;

  /**
   * {@link Video} duration in seconds
   */
  video_duration?: number;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the video. This field is required if {@link InlineQueryResultVideo} is used to send an HTML-page as a result (e.g., a YouTube video).
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use {@link InlineQueryResultAudio.input_message_content | input_message_content} to send a message with the specified content instead of the audio.
 */
export type InlineQueryResultAudio = {
  /**
   * Type of the result, must be audio
   */
  type: 'audio';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the audio file
   */
  audio_url: string;

  /**
   * Title
   */
  title: string;

  /**
   * Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Performer
   */
  performer?: string;

  /**
   * {@link Audio} duration in seconds
   */
  audio_duration?: number;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the audio
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a voice recording in an.OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use {@link InlineQueryResultVoice.input_message_content | input_message_content} to send a message with the specified content instead of the the voice message.
 */
export type InlineQueryResultVoice = {
  /**
   * Type of the result, must be voice
   */
  type: 'voice';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the voice recording
   */
  voice_url: string;

  /**
   * Recording title
   */
  title: string;

  /**
   * Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Recording duration in seconds
   */
  voice_duration?: number;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the voice recording
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional {@link InlineQueryResultDocument.caption | caption}. Alternatively, you can use {@link InlineQueryResultDocument.input_message_content | input_message_content} to send a message with the specified content instead of the file. Currently, only.PDF and.ZIP files can be sent using this method.
 */
export type InlineQueryResultDocument = {
  /**
   * Type of the result, must be document
   */
  type: 'document';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * A valid URL for the file
   */
  document_url: string;

  /**
   * MIME type of the content of the file, either “application/pdf” or “application/zip”
   */
  mime_type: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the file
   */
  input_message_content?: InputMessageContent;

  /**
   * URL of the thumbnail (JPEG only) for the file
   */
  thumbnail_url?: string;

  /**
   * Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Thumbnail height
   */
  thumbnail_height?: number;
};

/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use {@link InlineQueryResultLocation.input_message_content | input_message_content} to send a message with the specified content instead of the location.
 */
export type InlineQueryResultLocation = {
  /**
   * Type of the result, must be location
   */
  type: 'location';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Location latitude in degrees
   */
  latitude: number;

  /**
   * Location longitude in degrees
   */
  longitude: number;

  /**
   * Location title
   */
  title: string;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
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
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the location
   */
  input_message_content?: InputMessageContent;

  /**
   * Url of the thumbnail for the result
   */
  thumbnail_url?: string;

  /**
   * Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Thumbnail height
   */
  thumbnail_height?: number;
};

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use {@link InlineQueryResultVenue.input_message_content | input_message_content} to send a message with the specified content instead of the venue.
 */
export type InlineQueryResultVenue = {
  /**
   * Type of the result, must be venue
   */
  type: 'venue';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Latitude of the venue location in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue location in degrees
   */
  longitude: number;

  /**
   * Title of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Foursquare identifier of the venue if known
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
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the venue
   */
  input_message_content?: InputMessageContent;

  /**
   * Url of the thumbnail for the result
   */
  thumbnail_url?: string;

  /**
   * Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Thumbnail height
   */
  thumbnail_height?: number;
};

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use {@link InlineQueryResultContact.input_message_content | input_message_content} to send a message with the specified content instead of the contact.
 */
export type InlineQueryResultContact = {
  /**
   * Type of the result, must be contact
   */
  type: 'contact';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

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
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the contact
   */
  input_message_content?: InputMessageContent;

  /**
   * Url of the thumbnail for the result
   */
  thumbnail_url?: string;

  /**
   * Thumbnail width
   */
  thumbnail_width?: number;

  /**
   * Thumbnail height
   */
  thumbnail_height?: number;
};

/**
 * Represents a {@link Game}.
 */
export type InlineQueryResultGame = {
  /**
   * Type of the result, must be game
   */
  type: 'game';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Short name of the game
   */
  game_short_name: string;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;
};

/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional {@link InlineQueryResultCachedPhoto.caption | caption}. Alternatively, you can use {@link InlineQueryResultCachedPhoto.input_message_content | input_message_content} to send a message with the specified content instead of the photo.
 */
export type InlineQueryResultCachedPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: 'photo';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the photo
   */
  photo_file_id: string;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the photo
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional {@link InlineQueryResultCachedGif.caption | caption}. Alternatively, you can use {@link InlineQueryResultCachedGif.input_message_content | input_message_content} to send a message with specified content instead of the animation.
 */
export type InlineQueryResultCachedGif = {
  /**
   * Type of the result, must be gif
   */
  type: 'gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the GIF file
   */
  gif_file_id: string;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the GIF animation
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional {@link InlineQueryResultCachedMpeg4Gif.caption | caption}. Alternatively, you can use {@link InlineQueryResultCachedMpeg4Gif.input_message_content | input_message_content} to send a message with the specified content instead of the animation.
 */
export type InlineQueryResultCachedMpeg4Gif = {
  /**
   * Type of the result, must be mpeg4_gif
   */
  type: 'mpeg4_gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the MPEG4 file
   */
  mpeg4_file_id: string;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the video animation
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use {@link InlineQueryResultCachedSticker.input_message_content | input_message_content} to send a message with the specified content instead of the sticker.
 */
export type InlineQueryResultCachedSticker = {
  /**
   * Type of the result, must be sticker
   */
  type: 'sticker';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the sticker
   */
  sticker_file_id: string;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the sticker
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional {@link InlineQueryResultCachedDocument.caption | caption}. Alternatively, you can use {@link InlineQueryResultCachedDocument.input_message_content | input_message_content} to send a message with the specified content instead of the file.
 */
export type InlineQueryResultCachedDocument = {
  /**
   * Type of the result, must be document
   */
  type: 'document';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * A valid file identifier for the file
   */
  document_file_id: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the file
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional {@link InlineQueryResultCachedVideo.caption | caption}. Alternatively, you can use {@link InlineQueryResultCachedVideo.input_message_content | input_message_content} to send a message with the specified content instead of the video.
 */
export type InlineQueryResultCachedVideo = {
  /**
   * Type of the result, must be video
   */
  type: 'video';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the video file
   */
  video_file_id: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean;

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the video
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use {@link InlineQueryResultCachedVoice.input_message_content | input_message_content} to send a message with the specified content instead of the voice message.
 */
export type InlineQueryResultCachedVoice = {
  /**
   * Type of the result, must be voice
   */
  type: 'voice';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the voice message
   */
  voice_file_id: string;

  /**
   * Voice message title
   */
  title: string;

  /**
   * Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the voice message
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use {@link InlineQueryResultCachedAudio.input_message_content | input_message_content} to send a message with the specified content instead of the audio.
 */
export type InlineQueryResultCachedAudio = {
  /**
   * Type of the result, must be audio
   */
  type: 'audio';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the audio file
   */
  audio_file_id: string;

  /**
   * Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * {@link https://core.telegram.org/bots/features#inline-keyboards | Inline keyboard} attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the audio
   */
  input_message_content?: InputMessageContent;
};

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export type InputTextMessageContent = {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';

  /**
   * List of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Link preview generation options for the message
   */
  link_preview_options?: LinkPreviewOptions;
};

/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
export type InputLocationMessageContent = {
  /**
   * Latitude of the location in degrees
   */
  latitude: number;

  /**
   * Longitude of the location in degrees
   */
  longitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;

  /**
   * Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
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
};

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
export type InputVenueMessageContent = {
  /**
   * Latitude of the venue in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue in degrees
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
   * Foursquare identifier of the venue, if known
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
};

/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
export type InputContactMessageContent = {
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
};

/**
 * Represents the content of an invoice message to be sent as the result of an inline query.
 */
export type InputInvoiceMessageContent = {
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
    | 'ZAR';

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: LabeledPrice[];

  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number;

  /**
   * A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[];

  /**
   * A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
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
 * Represents a result of an inline {@link ChosenInlineResult.query | query} that was chosen by the user and sent to their chat partner.
 */
export type ChosenInlineResult = {
  /**
   * The unique identifier for the result that was chosen
   */
  result_id: string;

  /**
   * The user that chose the result
   */
  from: User;

  /**
   * Sender location, only for bots that require user location
   */
  location?: Location;

  /**
   * Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
   */
  inline_message_id?: string;

  /**
   * The query that was used to obtain the result
   */
  query: string;
};

/**
 * Describes an inline message sent by a {@link https://core.telegram.org/bots/webapps | Web App} on behalf of a user.
 */
export type SentWebAppMessage = {
  /**
   * Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
   */
  inline_message_id?: string;
};

/**
 * Describes an inline message to be sent by a user of a Mini App.
 */
export type PreparedInlineMessage = {
  /**
   * Unique identifier of the prepared message
   */
  id: string;

  /**
   * Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used
   */
  expiration_date: number;
};

export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;

export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent;

/**
 * This object represents a portion of the price for goods or services.
 */
export type LabeledPrice = {
  /**
   * Portion label
   */
  label: string;

  /**
   * Price of the product in the smallest units of the {@link https://core.telegram.org/bots/payments#supported-currencies | currency} (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  amount: number;
};

/**
 * This object contains basic information about an invoice.
 */
export type Invoice = {
  /**
   * Product name
   */
  title: string;

  /**
   * Product description
   */
  description: string;

  /**
   * Unique bot deep-linking parameter that can be used to generate this invoice
   */
  start_parameter: string;

  /**
   * Three-letter ISO 4217 {@link https://core.telegram.org/bots/payments#supported-currencies | currency} code, or “XTR” for payments in Telegram Stars
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
    | 'ZAR';

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
};

/**
 * This object represents a shipping address.
 */
export type ShippingAddress = {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code
   */
  country_code: string;

  /**
   * State, if applicable
   */
  state: string;

  /**
   * City
   */
  city: string;

  /**
   * First line for the address
   */
  street_line1: string;

  /**
   * Second line for the address
   */
  street_line2: string;

  /**
   * Address post code
   */
  post_code: string;
};

/**
 * This object represents information about an order.
 */
export type OrderInfo = {
  /**
   * {@link User} name
   */
  name?: string;

  /**
   * User's phone number
   */
  phone_number?: string;

  /**
   * {@link User} email
   */
  email?: string;

  /**
   * {@link User} shipping address
   */
  shipping_address?: ShippingAddress;
};

/**
 * This object represents one shipping option.
 */
export type ShippingOption = {
  /**
   * Shipping option identifier
   */
  id: string;

  /**
   * Option title
   */
  title: string;

  /**
   * List of price portions
   */
  prices: LabeledPrice[];
};

/**
 * This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control.
 */
export type SuccessfulPayment = {
  /**
   * Three-letter ISO 4217 {@link https://core.telegram.org/bots/payments#supported-currencies | currency} code, or “XTR” for payments in Telegram Stars
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
    | 'ZAR';

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Expiration date of the subscription, in Unix time; for recurring payments only
   */
  subscription_expiration_date?: number;

  /**
   * True, if the payment is a recurring payment for a subscription
   */
  is_recurring?: true;

  /**
   * True, if the payment is the first payment for a subscription
   */
  is_first_recurring?: true;

  /**
   * Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string;

  /**
   * Order information provided by the user
   */
  order_info?: OrderInfo;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;

  /**
   * Provider payment identifier
   */
  provider_payment_charge_id: string;
};

/**
 * This object contains basic information about a refunded payment.
 */
export type RefundedPayment = {
  /**
   * Three-letter ISO 4217 {@link https://core.telegram.org/bots/payments#supported-currencies | currency} code, or “XTR” for payments in Telegram Stars. Currently, always “XTR”
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
    | 'ZAR';

  /**
   * Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;

  /**
   * Provider payment identifier
   */
  provider_payment_charge_id?: string;
};

/**
 * This object contains information about an incoming shipping query.
 */
export type ShippingQuery = {
  /**
   * Unique query identifier
   */
  id: string;

  /**
   * User who sent the query
   */
  from: User;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * User specified shipping address
   */
  shipping_address: ShippingAddress;
};

/**
 * This object contains information about an incoming pre-checkout query.
 */
export type PreCheckoutQuery = {
  /**
   * Unique query identifier
   */
  id: string;

  /**
   * User who sent the query
   */
  from: User;

  /**
   * Three-letter ISO 4217 {@link https://core.telegram.org/bots/payments#supported-currencies | currency} code, or “XTR” for payments in Telegram Stars
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
    | 'ZAR';

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in {@link https://core.telegram.org/bots/payments/currencies.json | currencies.json}, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;

  /**
   * Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string;

  /**
   * Order information provided by the user
   */
  order_info?: OrderInfo;
};

/**
 * This object contains information about a paid media purchase.
 */
export type PaidMediaPurchased = {
  /**
   * User who purchased the media
   */
  from: User;

  /**
   * Bot-specified paid media payload
   */
  paid_media_payload: string;
};

/**
 * The withdrawal is in progress.
 */
export type RevenueWithdrawalStatePending = {
  /**
   * Type of the state, always “pending”
   */
  type: string;
};

/**
 * The withdrawal succeeded.
 */
export type RevenueWithdrawalStateSucceeded = {
  /**
   * Type of the state, always “succeeded”
   */
  type: string;

  /**
   * Date the withdrawal was completed in Unix time
   */
  date: number;

  /**
   * An HTTPS URL that can be used to see transaction details
   */
  url: string;
};

/**
 * The withdrawal failed and the transaction was refunded.
 */
export type RevenueWithdrawalStateFailed = {
  /**
   * Type of the state, always “failed”
   */
  type: string;
};

/**
 * Contains information about the affiliate that received a commission via this transaction.
 */
export type AffiliateInfo = {
  /**
   * The bot or the user that received an affiliate commission if it was received by a bot or a user
   */
  affiliate_user?: User;

  /**
   * The chat that received an affiliate commission if it was received by a chat
   */
  affiliate_chat?: Chat;

  /**
   * The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users
   */
  commission_per_mille: number;

  /**
   * Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds
   */
  amount: number;

  /**
   * The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds
   */
  nanostar_amount?: number;
};

/**
 * Describes a transaction with a {@link TransactionPartnerUser.user | user}.
 */
export type TransactionPartnerUser = {
  /**
   * Type of the transaction partner, always “user”
   */
  type: string;

  /**
   * Type of the transaction, currently one of “invoice_payment” for payments via invoices, “paid_media_payment” for payments for paid media, “gift_purchase” for gifts sent by the bot, “premium_purchase” for Telegram Premium subscriptions gifted by the bot, “business_account_transfer” for direct transfers from managed business accounts
   */
  transaction_type: string;

  /**
   * Information about the user
   */
  user: User;

  /**
   * Information about the affiliate that received a commission via this transaction. Can be available only for “invoice_payment” and “paid_media_payment” transactions.
   */
  affiliate?: AffiliateInfo;

  /**
   * Bot-specified invoice payload. Can be available only for “invoice_payment” transactions.
   */
  invoice_payload?: string;

  /**
   * The duration of the paid subscription. Can be available only for “invoice_payment” transactions.
   */
  subscription_period?: number;

  /**
   * Information about the paid media bought by the user; for “paid_media_payment” transactions only
   */
  paid_media?: PaidMedia[];

  /**
   * Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions.
   */
  paid_media_payload?: string;

  /**
   * The gift sent to the user by the bot; for “gift_purchase” transactions only
   */
  gift?: Gift;

  /**
   * Number of months the gifted Telegram Premium subscription will be active for; for “premium_purchase” transactions only
   */
  premium_subscription_duration?: number;
};

/**
 * Describes a transaction with a {@link TransactionPartnerChat.chat | chat}.
 */
export type TransactionPartnerChat = {
  /**
   * Type of the transaction partner, always “chat”
   */
  type: string;

  /**
   * Information about the chat
   */
  chat: Chat;

  /**
   * The gift sent to the chat by the bot
   */
  gift?: Gift;
};

/**
 * Describes the affiliate program that issued the affiliate commission received via this transaction.
 */
export type TransactionPartnerAffiliateProgram = {
  /**
   * Type of the transaction partner, always “affiliate_program”
   */
  type: string;

  /**
   * Information about the bot that sponsored the affiliate program
   */
  sponsor_user?: User;

  /**
   * The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users
   */
  commission_per_mille: number;
};

/**
 * Describes a withdrawal transaction with Fragment.
 */
export type TransactionPartnerFragment = {
  /**
   * Type of the transaction partner, always “fragment”
   */
  type: string;

  /**
   * State of the transaction if the transaction is outgoing
   */
  withdrawal_state?: RevenueWithdrawalState;
};

/**
 * Describes a withdrawal transaction to the Telegram Ads platform.
 */
export type TransactionPartnerTelegramAds = {
  /**
   * Type of the transaction partner, always “telegram_ads”
   */
  type: string;
};

/**
 * Describes a transaction with payment for paid broadcasting.
 */
export type TransactionPartnerTelegramApi = {
  /**
   * Type of the transaction partner, always “telegram_api”
   */
  type: string;

  /**
   * The number of successful requests that exceeded regular limits and were therefore billed
   */
  request_count: number;
};

/**
 * Describes a transaction with an unknown source or recipient.
 */
export type TransactionPartnerOther = {
  /**
   * Type of the transaction partner, always “other”
   */
  type: string;
};

/**
 * Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control.
 */
export type StarTransaction = {
  /**
   * Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with {@link SuccessfulPayment}.telegram_payment_charge_id for successful incoming payments from users.
   */
  id: string;

  /**
   * Integer amount of Telegram Stars transferred by the transaction
   */
  amount: number;

  /**
   * The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999
   */
  nanostar_amount?: number;

  /**
   * Date the transaction was created in Unix time
   */
  date: number;

  /**
   * Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions
   */
  source?: TransactionPartner;

  /**
   * Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions
   */
  receiver?: TransactionPartner;
};

/**
 * Contains a list of Telegram Star {@link StarTransactions.transactions | transactions}.
 */
export type StarTransactions = {
  /**
   * The list of transactions
   */
  transactions: StarTransaction[];
};

export type RevenueWithdrawalState =
  | RevenueWithdrawalStatePending
  | RevenueWithdrawalStateSucceeded
  | RevenueWithdrawalStateFailed;

export type TransactionPartner =
  | TransactionPartnerUser
  | TransactionPartnerChat
  | TransactionPartnerAffiliateProgram
  | TransactionPartnerFragment
  | TransactionPartnerTelegramAds
  | TransactionPartnerTelegramApi
  | TransactionPartnerOther;

/**
 * Describes Telegram Passport {@link PassportData.data | data} shared with the bot by the user.
 */
export type PassportData = {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: EncryptedPassportElement[];

  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;
};

/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 */
export type PassportFile = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * File size in bytes
   */
  file_size: number;

  /**
   * Unix time when the file was uploaded
   */
  file_date: number;
};

/**
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 */
export type EncryptedPassportElement = {
  /**
   * Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
   */
  type: string;

  /**
   * Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  data?: string;

  /**
   * User's verified phone number; available only for “phone_number” type
   */
  phone_number?: string;

  /**
   * User's verified email address; available only for “email” type
   */
  email?: string;

  /**
   * Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  files?: PassportFile[];

  /**
   * Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  front_side?: PassportFile;

  /**
   * Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  reverse_side?: PassportFile;

  /**
   * Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  selfie?: PassportFile;

  /**
   * Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying {@link EncryptedCredentials}.
   */
  translation?: PassportFile[];

  /**
   * Base64-encoded element hash for using in PassportElementErrorUnspecified
   */
  hash: string;
};

/**
 * Describes {@link EncryptedCredentials.data | data} required for decrypting and authenticating {@link EncryptedPassportElement}. See the {@link https://core.telegram.org/passport#receiving-information | Telegram Passport Documentation} for a complete description of the {@link EncryptedCredentials.data | data} decryption and authentication processes.
 */
export type EncryptedCredentials = {
  /**
   * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for {@link EncryptedPassportElement} decryption and authentication
   */
  data: string;

  /**
   * Base64-encoded data hash for data authentication
   */
  hash: string;

  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
   */
  secret: string;
};

/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 */
export type PassportElementErrorDataField = {
  /**
   * Error source, must be data
   */
  source: 'data';

  /**
   * The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
   */
  type: string;

  /**
   * Name of the data field which has the error
   */
  field_name: string;

  /**
   * Base64-encoded data hash
   */
  data_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 */
export type PassportElementErrorFrontSide = {
  /**
   * Error source, must be front_side
   */
  source: 'front_side';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
   */
  type: string;

  /**
   * Base64-encoded hash of the file with the front side of the document
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 */
export type PassportElementErrorReverseSide = {
  /**
   * Error source, must be reverse_side
   */
  source: 'reverse_side';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
   */
  type: string;

  /**
   * Base64-encoded hash of the file with the reverse side of the document
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 */
export type PassportElementErrorSelfie = {
  /**
   * Error source, must be selfie
   */
  source: 'selfie';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
   */
  type: string;

  /**
   * Base64-encoded hash of the file with the selfie
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 */
export type PassportElementErrorFile = {
  /**
   * Error source, must be file
   */
  source: 'file';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * Base64-encoded file hash
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
export type PassportElementErrorFiles = {
  /**
   * Error source, must be files
   */
  source: 'files';

  /**
   * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 */
export type PassportElementErrorTranslationFile = {
  /**
   * Error source, must be translation_file
   */
  source: 'translation_file';

  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * Base64-encoded file hash
   */
  file_hash: string;

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 */
export type PassportElementErrorTranslationFiles = {
  /**
   * Error source, must be translation_files
   */
  source: 'translation_files';

  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];

  /**
   * Error message
   */
  message: string;
};

/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 */
export type PassportElementErrorUnspecified = {
  /**
   * Error source, must be unspecified
   */
  source: 'unspecified';

  /**
   * Type of element of the user's Telegram Passport which has the issue
   */
  type: string;

  /**
   * Base64-encoded element hash
   */
  element_hash: string;

  /**
   * Error message
   */
  message: string;
};

export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;

/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 */
export type Game = {
  /**
   * Title of the game
   */
  title: string;

  /**
   * Description of the game
   */
  description: string;

  /**
   * Photo that will be displayed in the game message in chats.
   */
  photo: PhotoSize[];

  /**
   * Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
   */
  text?: string;

  /**
   * Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   */
  text_entities?: MessageEntity[];

  /**
   * {@link Animation} that will be displayed in the game message in chats. Upload via BotFather
   */
  animation?: Animation;
};

export type CallbackGame = Record<string, never>;

/**
 * This object represents one row of the high scores table for a game.
 */
export type GameHighScore = {
  /**
   * Position in high score table for the game
   */
  position: number;

  /**
   * User
   */
  user: User;

  /**
   * Score
   */
  score: number;
};

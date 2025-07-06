// This file is generated. Do not edit it.

import { botMethod } from '../method';

export type RemoveBusinessAccountProfilePhoto = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.
   */
  is_public: boolean;
};

/**
 * Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
 */
export const removeBusinessAccountProfilePhoto = botMethod<
  RemoveBusinessAccountProfilePhoto,
  boolean
>('removeBusinessAccountProfilePhoto');

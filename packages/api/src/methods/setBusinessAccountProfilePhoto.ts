// This file is generated. Do not edit it.

import { botMethod } from '../method.js';
import { InputProfilePhoto } from '../types.js';

export type SetBusinessAccountProfilePhoto = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id?: string;

  /**
   * The new profile photo to set
   */
  photo?: InputProfilePhoto;

  /**
   * Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.
   */
  is_public: boolean;
};

/**
 * Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
 */
export const setBusinessAccountProfilePhoto = /* @__PURE__ */ botMethod<
  SetBusinessAccountProfilePhoto,
  boolean
>('setBusinessAccountProfilePhoto');

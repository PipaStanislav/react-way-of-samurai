import { ProfileType } from '../../redux/profile/profile.types';

export type GetProfileType = Promise<ProfileType>;
export type GetProfilesType = Promise<Array<ProfileType>>;
export type CreateProfileType = Promise<ProfileType>;
export type UpdateProfileType = Promise<ProfileType>;
export type DeleteProfileType = Promise<boolean>;
import { MetaDataType } from '../../common/types';
import { AvatarType, UserIdType, UserType } from '../user/user.types';

export type newPostTextType = string;

export type PostType = {
  id: number,
  userId: number,
  message: string,
  likesCount: number,
  authorId: number,
  user: UserType,
};

export type PostsType = Array<PostType>;

export type ContactsType = {
  facebook: string,
  website: string,
  instagram: string,
  github: string,
};

export type ProfileStatusType = string;

export type ProfileType = {
  userId: UserIdType,
  aboutMe: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  status: ProfileStatusType,
  avatar: AvatarType,
  contacts: ContactsType,
};

export type ProfileStateType = {
  newPostText: newPostTextType,
  posts: PostsType,
  profile: ProfileType | null,
  metaData: MetaDataType,
};
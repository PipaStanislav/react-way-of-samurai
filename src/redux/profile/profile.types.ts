import { MetaDataType } from '../../common/types';
import { AvatarType } from '../user/user.types';

export type newPostTextType = string;

export type PostType = {
  id: number,
  userId: number,
  message: string,
  likesCount: number,
  authorId: number,
};

export type PostsType = Array<PostType>;

export type ContactsType = {
  facebook: string,
  website: string,
  instagram: string,
  github: string,
};

export type ProfileType = {
  userId: number,
  aboutMe: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  status: string,
  avatar: AvatarType,
  contacts: ContactsType,
};

export type ProfileStateType = {
  newPostText: newPostTextType,
  posts: PostsType,
  profile: ProfileType | null,
  metaData: MetaDataType,
};
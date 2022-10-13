import { IsFetchingType } from '../preloader/preloader.types';
import { AuthIsRememberMeType, DataType } from '../auth/auth.types';
import { UserIdType, UserType } from '../user/user.types';
import { PostsType, ProfileType } from '../profile/profile.types';
import { MetaDataType } from '../../common/types';
import { DialogType } from '../dialog/dialog.types';
import { MusicsType } from '../music/music.types';

type TypeType = string;

export type SetInitializedSuccessType = {
  type: TypeType,
}

export type SetIsFetchingType = {
  type: TypeType,
  isFetching: IsFetchingType
}

export type SetAuthDataType = {
  type: TypeType,
  data: DataType
}

export type SetIsRememberMe = {
  type: TypeType,
  isRememberMe: AuthIsRememberMeType,
}

export type LogOutType = {
  type: TypeType,
}

export type SetFriendsType = {
  type: TypeType,
  friends: Array<UserType>,
}

export type SetProfileType = {
  type: TypeType,
  profile: ProfileType,
}

export type SetProfilePostsType = {
  type: TypeType,
  profilePosts: PostsType,
}

export type SetProfilePostsMetaDataType = {
  type: TypeType
  metaData: MetaDataType
}

export type SetDialogsType = {
  type: TypeType,
  dialogs: Array<DialogType>
}

export type SetDialogType = {
  type: TypeType,
  dialog: DialogType,
}

export type SetDialogsMetaData = {
  type: TypeType,
  metaData: MetaDataType,
}

export type SetUsers = {
  type: TypeType,
  users: Array<UserType>
}

export type SetMetaDataType = {
  type: TypeType,
  metaData: MetaDataType,
}

export type FollowByUserType = {
  type: TypeType,
  userId: UserIdType,
}

export type UnfollowByUserType = {
  type: TypeType,
  userId: UserIdType,
}

export type ChangeDisplayUsersType = {
  type: TypeType,
}

export type SetActivePageType = {
  type: TypeType,
  pageNumber: number,
}

export type SetIsFollowingUnfollowingInProgressType = {
  type: TypeType,
  data: DataType,
}

export type SetMusicsType = {
  type: TypeType,
  musics: MusicsType,
}

export type SetMusicsMetaDataType = {
  type: TypeType,
  metaData: MetaDataType,
}

export type ActionTypes = SetInitializedSuccessType
  | SetIsFetchingType
  | SetAuthDataType
  | SetIsRememberMe
  | LogOutType
  | SetFriendsType
  | SetProfileType
  | SetProfilePostsType
  | SetProfilePostsMetaDataType
  | SetDialogsType
  | SetDialogType
  | SetDialogsMetaData
  | SetUsers
  | SetMetaDataType
  | FollowByUserType
  | UnfollowByUserType
  | ChangeDisplayUsersType
  | SetActivePageType
  | SetIsFollowingUnfollowingInProgressType
  | SetMusicsType
  | SetMusicsMetaDataType
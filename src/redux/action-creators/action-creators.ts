import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants';
import { MetaDataType } from '../../common/types';
import { AuthIsRememberMeType, DataType } from '../auth/auth.types';
import { UserType } from '../user/user.types';
import { ProfileType, PostsType } from '../profile/profile.types';
import { DialogType } from '../dialog/dialog.types';
import { MusicsType, MusicType } from '../music/music.types';
import {
  ChangeDisplayUsersType,
  FollowByUserType,
  LogOutType,
  SetActivePageType,
  SetAuthDataType,
  SetDialogsMetaData,
  SetDialogsType,
  SetDialogType,
  SetFriendsType,
  SetInitializedSuccessType,
  SetIsFetchingType,
  SetIsFollowingUnfollowingInProgressType,
  SetIsRememberMe,
  SetMetaDataType,
  SetMusicsMetaDataType,
  SetMusicsType,
  SetProfilePostsMetaDataType,
  SetProfilePostsType,
  SetProfileType,
  SetUsers,
  UnfollowByUserType,
} from './action-creators.types';
import { IsFetchingType } from '../preloader/preloader.types';

export const setInitializedSuccess = (): SetInitializedSuccessType => ({ type: DISPATCH_CONSTANTS.APP.INITIALIZE_SUCCESS });

export const setIsFetching = (isFetching: IsFetchingType): SetIsFetchingType => ({
  type: DISPATCH_CONSTANTS.PRELOADER.SET_IS_FETCHING,
  isFetching,
});

export const setAuthData = (data: DataType): SetAuthDataType => ({ type: DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA, data });
export const setIsRememberMe = (isRememberMe: AuthIsRememberMeType): SetIsRememberMe => ({
  type: DISPATCH_CONSTANTS.AUTH.IS_REMEMBER_ME,
  isRememberMe,
});
export const logOut = (): LogOutType => ({ type: DISPATCH_CONSTANTS.AUTH.LOG_OUT });

export const setFriends = (friends: Array<UserType>): SetFriendsType => ({
  type: DISPATCH_CONSTANTS.SIDE_BAR.SET_FRIENDS,
  friends,
});

export const setProfile = (profile: ProfileType): SetProfileType => ({
  type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE,
  profile,
});
export const setProfilePosts = (profilePosts: PostsType): SetProfilePostsType => ({
  type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS,
  profilePosts,
});
export const setProfilePostsMetaData = (metaData: MetaDataType): SetProfilePostsMetaDataType => ({
  type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA,
  metaData,
});

export const setDialogs = (dialogs: Array<DialogType>): SetDialogsType => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS,
  dialogs,
});
export const setDialog = (dialog: DialogType): SetDialogType => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOG,
  dialog,
});
export const setDialogsMetaData = (metaData: MetaDataType): SetDialogsMetaData => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS_META_DATA,
  metaData,
});

export const setUsers = (users: Array<UserType>): SetUsers => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.SET_USERS,
  users,
});
export const setMetaData = (metaData: MetaDataType): SetMetaDataType => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.SET_META_DATA,
  metaData,
});
export const followByUser = (userId: number): FollowByUserType => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW,
  userId,
});
export const unfollowByUser = (userId: number): UnfollowByUserType => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW,
  userId,
});
export const changeDisplayUsers = (): ChangeDisplayUsersType => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS });
export const setActivePage = (pageNumber: number): SetActivePageType => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE,
  pageNumber,
});
export const setIsFollowingUnfollowingInProgress = (data: object): SetIsFollowingUnfollowingInProgressType => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOWING_IN_PROGRESS,
  data,
});

export const setMusics = (musics: MusicsType): SetMusicsType => ({
  type: DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS,
  musics,
});
export const setMusicsMetaData = (metaData: MetaDataType): SetMusicsMetaDataType => ({
  type: DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS_META_DATA,
  metaData,
});
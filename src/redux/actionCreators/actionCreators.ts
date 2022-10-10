import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants';
import { MetaDataType } from '../../common/types';
import { DataType } from '../reducers/authReducer/authReducer.types';
import { UserType } from '../reducers/userReducer/userReducer.types';
import { ProfileType, PostsType } from '../reducers/profileReducer/profileReducer.types';
import { DialogType } from '../reducers/dialogReducer/dialogReducer.types';
import { MusicType } from '../reducers/musicReducer/musicReducer.types';

export const setInitializedSuccess = () => ({ type: DISPATCH_CONSTANTS.APP.INITIALIZE_SUCCESS });

export const setIsFetching = (isFetching: boolean) => ({
  type: DISPATCH_CONSTANTS.PRELOADER.SET_IS_FETCHING,
  isFetching,
});

export const setAuthData = (data: DataType) => ({ type: DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA, data });
export const setIsRememberMe = (isRememberMe: boolean) => ({
  type: DISPATCH_CONSTANTS.AUTH.IS_REMEMBER_ME,
  isRememberMe,
});
export const logOut = () => ({ type: DISPATCH_CONSTANTS.AUTH.LOG_OUT });

export const setFriends = (friends: Array<UserType>) => ({ type: DISPATCH_CONSTANTS.SIDE_BAR.SET_FRIENDS, friends });

export const setProfile = (profile: ProfileType) => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE, profile });
export const setProfilePosts = (profilePosts: PostsType) => ({
  type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS,
  profilePosts,
});
export const setProfilePostsMetaData = (metaData: MetaDataType) => ({
  type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA,
  metaData,
});

export const setDialogs = (dialogs: Array<DialogType>) => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS,
  dialogs,
});
export const setDialog = (dialog: DialogType) => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOG, dialog });
export const setDialogsMetaData = (metaData: MetaDataType) => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS_META_DATA,
  metaData,
});

export const setUsers = (users: Array<UserType>) => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_USERS, users });
export const setMetaData = (metaData: MetaDataType) => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.SET_META_DATA,
  metaData,
});
export const followByUser = (userId: number) => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW, userId });
export const unfollowByUser = (userId: number) => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW, userId });
export const changeDisplayUsers = () => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS });
export const setActivePage = (pageNumber: number) => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE,
  pageNumber,
});
export const setIsFollowingUnfollowingInProgress = (data: object) => ({
  type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOWING_IN_PROGRESS,
  data,
});

export const setMusics = (musics: MusicType) => ({ type: DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS, musics });
export const setMusicsMetaData = (metaData: MetaDataType) => ({
  type: DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS_META_DATA,
  metaData,
});
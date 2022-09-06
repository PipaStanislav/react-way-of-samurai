import DISPATCH_CONSTANTS from '../../constants/dispatch-constants';

export const setAuthData = data => ({ type: DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA, data });
export const setIsRememberMe = isRememberMe => ({ type: DISPATCH_CONSTANTS.AUTH.IS_REMEMBER_ME, isRememberMe });
export const logOut = () => ({ type: DISPATCH_CONSTANTS.AUTH.LOG_OUT });

export const setFriends = friends => ({ type: DISPATCH_CONSTANTS.SIDE_BAR.SET_FRIENDS, friends });

export const setProfile = profile => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE, profile });
export const setProfilePosts = profilePosts => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS, profilePosts });
export const setProfilePostsMetaData = metaData => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA, metaData });

export const setDialogs = dialogs => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS, dialogs });
export const setDialog = dialog => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOG, dialog });
export const setDialogsMetaData = metaData => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS_META_DATA, metaData });

export const setUsers = users => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_USERS, users });
export const setMetaData = metaData => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_META_DATA, metaData });
export const followByUser = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW, userId });
export const unfollowByUser = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW, userId });
export const changeDisplayUsers = () => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS });
export const setActivePage = pageNumber => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE, pageNumber });
export const setIsFetching = isFetching => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_IS_FETCHING, isFetching });
export const setIsFollowingUnfollowingInProgress = data => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOWING_IN_PROGRESS, data });

import DISPATCH_CONSTANTS from '../constants/dispatch-constants';

export const setAuthData = data => ({ type: DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA, data });

export const addPost = () => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.ADD_POST });
export const updateNewPost = text => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.UPDATE_NEW_POST_TEXT, newText: text });
export const setProfile = profile => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE, profile });

export const sendMessage = () => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SEND_MESSAGE });
export const updateNewMessage = text => ({
  type: DISPATCH_CONSTANTS.DIALOG_PAGE.UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export const setUsers = users => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.GET_USERS, users });
export const getMetaData = metaData => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.GET_META_DATA, metaData });
export const followByUser = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW, userId });
export const unfollowByUser = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW, userId });
export const changeDisplayUsers = () => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS });
export const setActivePage = pageNumber => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE, pageNumber });
export const setIsFetching = isFetching => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_IS_FETCHING, isFetching });

import DISPATCH_CONSTANTS from '../constants/dispatch-constants';

export const addPostActionCreator = () => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.ADD_POST });

export const updateNewPostActionCreator = text => ({ type: DISPATCH_CONSTANTS.PROFILE_PAGE.UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageActionCreator = () => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.SEND_MESSAGE });

export const updateNewMessageActionCreator = text => ({ type: DISPATCH_CONSTANTS.DIALOG_PAGE.UPDATE_NEW_MESSAGE_TEXT, newText: text });

export const getUsersActionCreator = users => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.GET_USERS, users });

export const getMetaDataActionCreator = metaData => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.GET_META_DATA, metaData });

export const followByUserActionCreator = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW, userId });

export const unfollowByUserActionCreator = userId => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW, userId });

export const changeDisplayUsersActionCreator = () => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS });

export const setActivePageActionCreator = pageNumber => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE, pageNumber });

export const setIsFetchingActionCreator = isFetching => ({ type: DISPATCH_CONSTANTS.USERS_PAGE.SET_IS_FETCHING, isFetching });

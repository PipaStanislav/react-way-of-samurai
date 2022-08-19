import DISPATCH_CONSTANTS from '../constants/dispatch-constants';

export const addPostActionCreator = () => ({ type: DISPATCH_CONSTANTS.ADD_POST });

export const updateNewPostActionCreator = text => ({ type: DISPATCH_CONSTANTS.UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageActionCreator = () => ({ type: DISPATCH_CONSTANTS.SEND_MESSAGE });

export const updateNewMessageActionCreator = text => ({ type: DISPATCH_CONSTANTS.UPDATE_NEW_MESSAGE_TEXT, newText: text });
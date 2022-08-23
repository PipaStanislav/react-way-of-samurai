import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialState from './dialogInitialState';

const sendMessage = state => {
  if (!state.newMessageText) {
    return;
  }

  const newMessage = {
    id: state.messages.length + 1,
    message: state.newMessageText,
  }

  return {
    ...state,
    newMessageText: '',
    messages: [...state.messages, newMessage],
  };
};

const updateNewMessageText = (state, newText) => {
  return { ...state, newMessageText: newText };
};

const dialogReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SEND_MESSAGE) {
    return sendMessage(state);
  }

  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.UPDATE_NEW_MESSAGE_TEXT) {
    return updateNewMessageText(state, action.newText)
  }

  return state;
}

export default dialogReducer;
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

  state.messages.push(newMessage);
  state.newMessageText = '';

  return state;
};

const updateNewMessageText = (state, newText) => {
  state.newMessageText = newText;

  return state;
};

const dialogReducer = (state = initialState, action) => {
      if (action.type === DISPATCH_CONSTANTS.SEND_MESSAGE) {
        return sendMessage(state);
      }

      if (action.type === DISPATCH_CONSTANTS.UPDATE_NEW_MESSAGE_TEXT) {
        return updateNewMessageText(state, action.newText)
      }

  return state;
}

export default dialogReducer;
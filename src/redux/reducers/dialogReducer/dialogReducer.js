import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialState from './dialogInitialState';


const setDialogs = (state, dialogs) => {
  return { ...state, dialogs };
};

const setDialog = (state, dialog) => {
  return { ...state, dialog };
};

const setMetaData = (state, metaData) => {
  return { ...state, metaData };
};

const dialogReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS) {
    return setDialogs(state, action.dialogs);
  }

  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOG) {
    return setDialog(state, action.dialog);
  }

  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS_META_DATA) {
    return setMetaData(state, action.metaData);
  }

  return state;
}

export default dialogReducer;
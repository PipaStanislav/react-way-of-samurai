import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants'
import initialState from './dialog-initial-state';
import { DialogType, DialogStateType, DialogsType } from './dialog.types';
import { MetaDataType } from '../../common/types';
import { DialogActionInterface } from './dialog.interfaces';


const setDialogs = (state: DialogStateType, dialogs: DialogsType): DialogStateType => {
  return { ...state, dialogs };
};

const setDialog = (state: DialogStateType, dialog: DialogType): DialogStateType => {
  return { ...state, dialog };
};

const setMetaData = (state: DialogStateType, metaData: MetaDataType): DialogStateType => {
  return { ...state, metaData };
};

const dialogReducer = (state = initialState, action: DialogActionInterface) => {
  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS) {
    return setDialogs(state, <Array<DialogType>>action.dialogs);
  }

  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOG) {
    return setDialog(state, <DialogType>action.dialog);
  }

  if (action.type === DISPATCH_CONSTANTS.DIALOG_PAGE.SET_DIALOGS_META_DATA) {
    return setMetaData(state, <MetaDataType>action.metaData);
  }

  return state;
}

export default dialogReducer;
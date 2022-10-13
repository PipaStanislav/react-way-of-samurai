import { MetaDataType, StateType } from '../../common/types';
import { DialogStateType, DialogsType, DialogType } from './dialog.types';

export const getMetaData = (state: StateType): MetaDataType => state.messagesPage.metaData;

export const getDialog = (state: StateType): DialogType => <DialogType>state.messagesPage.dialog;

export const getDialogs = (state: StateType): DialogsType => state.messagesPage.dialogs;

export const getDialogStateToProps = (state: StateType): DialogStateType => ({
  dialog: getDialog(state),
  dialogs: getDialogs(state),
  metaData: getMetaData(state),
});

const getStateToProps = (state: StateType): { messagesPage: DialogStateType } => ({
  messagesPage: getDialogStateToProps(state),
});

export default getStateToProps;
import { DialogStateType } from './dialogReducer.types';

const dialogInitialState: DialogStateType = {
  dialogs: [],
  dialog: null,
  metaData: {
    offset: 0,
    limit: 10,
  }
};

export default dialogInitialState;
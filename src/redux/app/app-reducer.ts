import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants'
import initialState from './app-initial-state';
import { AppStateType } from './app.types';
import { AppActionInterface } from './app.interfaces';

const setInitialized = (state: AppStateType): AppStateType => {
  return { ...state, initialized: true };
};

const appReducer = (state: AppStateType = initialState, action: AppActionInterface): AppStateType => {
  if (action.type === DISPATCH_CONSTANTS.APP.INITIALIZE_SUCCESS) {
    return setInitialized(state);
  }

  return state;
}

export default appReducer;
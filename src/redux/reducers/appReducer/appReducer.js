import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialState from './appInitialState';

const setInitialized = (state) => {
  return { ...state, initialized: true };
};

const appReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.APP.INITIALIZE_SUCCESS) {
    return setInitialized(state);
  }

  return state;
}

export default appReducer;
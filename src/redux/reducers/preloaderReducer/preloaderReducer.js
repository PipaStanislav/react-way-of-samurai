import initialState from './preloaderInitialState';
import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants';

const setIsFetching = (state, isFetching) => {
  return { ...state, isFetching };
}

const preloaderReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.PRELOADER.SET_IS_FETCHING) {
    return setIsFetching(state, action.isFetching);
  }

  return state;
}

export default preloaderReducer;
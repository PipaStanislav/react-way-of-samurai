import initialState from './preloader-initial-state';
import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants';
import { IsFetchingType, PreloaderStateType } from './preloader.types';
import { PreloaderActionInterfaces } from './preloader.interfaces';

const setIsFetching = (state: PreloaderStateType, isFetching: IsFetchingType) => {
  return { ...state, isFetching };
}

const preloaderReducer = (state: PreloaderStateType = initialState, action: PreloaderActionInterfaces): PreloaderStateType => {
  if (action.type === DISPATCH_CONSTANTS.PRELOADER.SET_IS_FETCHING) {
    return setIsFetching(state, <IsFetchingType>action.isFetching);
  }

  return state;
}

export default preloaderReducer;
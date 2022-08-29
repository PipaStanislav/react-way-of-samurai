import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialState from './authInitialState';

const setAuthData = (state, data) => {
  return { ...state, ...data, isAuth: true };
};

const authReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA) {
    return setAuthData(state, action.data);
  }

  return state;
}

export default authReducer;
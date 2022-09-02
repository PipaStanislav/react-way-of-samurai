import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialState from './authInitialState';

const setAuthData = (state, data) => {
  return { ...state, ...data, isAuth: true };
};

const isRememberMe = (state, isRememberMe) => {
  return { ...state, isRememberMe };
};

const logOut = () => {
  return { ...initialState };
};

const authReducer = (state = initialState, action) => {
  if (action.type === DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA) {
    return setAuthData(state, action.data);
  }

  if (action.type === DISPATCH_CONSTANTS.AUTH.IS_REMEMBER_ME) {
    return isRememberMe(state, action.isRememberMe);
  }

  if (action.type === DISPATCH_CONSTANTS.AUTH.LOG_OUT) {
    return logOut();
  }

  return state;
}

export default authReducer;
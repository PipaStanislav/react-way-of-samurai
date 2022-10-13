import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants'
import initialState from './auth-initial-state';
import { AuthStateType, DataType, AuthIsRememberMeType } from './auth.types';
import { AuthActionInterface } from './auth.interfaces';


const setAuthData = (state: AuthStateType, data: DataType): AuthStateType => {
  return { ...state, ...data, isAuth: true };
};

const isRememberMe = (state: AuthStateType, isRememberMe: AuthIsRememberMeType): AuthStateType => {
  return { ...state, isRememberMe };
};

const logOut = (): AuthStateType => {
  return { ...initialState };
};

const authReducer = (state: AuthStateType = initialState, action: AuthActionInterface): AuthStateType => {
  if (action.type === DISPATCH_CONSTANTS.AUTH.SET_AUTH_DATA) {
    return setAuthData(state, <DataType>action.data);
  }

  if (action.type === DISPATCH_CONSTANTS.AUTH.IS_REMEMBER_ME) {
    return isRememberMe(state, <boolean>action.isRememberMe);
  }

  if (action.type === DISPATCH_CONSTANTS.AUTH.LOG_OUT) {
    return logOut();
  }

  return state;
}

export default authReducer;
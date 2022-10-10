import DISPATCH_CONSTANTS from '../../../constants/dispatch/dispatch-constants'
import initialState from './authInitialState';
import { AuthStateType, DataType, IsRememberMeType } from './authReducer.types';
import { AuthActionInterface } from './authReducer.interfaces';


const setAuthData = (state: AuthStateType, data: DataType): AuthStateType => {
  return { ...state, ...data, isAuth: true };
};

const isRememberMe = (state: AuthStateType, isRememberMe: IsRememberMeType): AuthStateType => {
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
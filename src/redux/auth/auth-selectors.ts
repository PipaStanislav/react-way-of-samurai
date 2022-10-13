import { StateType } from '../../common/types';
import {
  AuthEmailType,
  AuthIsAuthType,
  AuthIsRememberMeType,
  AuthLoginType,
  AuthPasswordType,
  AuthStateType,
  AuthUserIdType,
} from './auth.types';

export const getUserId = (state: StateType): AuthUserIdType => state.auth.userId;

export const getEmail = (state: StateType): AuthEmailType => state.auth.email;

export const getLogin = (state: StateType): AuthLoginType => state.auth.login;

export const getIsAuth = (state: StateType): AuthIsAuthType => state.auth.isAuth;

export const getPassword = (state: StateType): AuthPasswordType => state.auth.password;

export const getIsRememberMe = (state: StateType): AuthIsRememberMeType => state.auth.isRememberMe;

export const getAuthStateToProps = (state: StateType): AuthStateType => ({
  userId: getUserId(state),
  email: getEmail(state),
  login: getLogin(state),
  isAuth: getIsAuth(state),
  password: getPassword(state),
  isRememberMe: getIsRememberMe(state),
});

const getStateToProps = (state: StateType): { auth: AuthStateType } => ({
  auth: getAuthStateToProps(state),
});

export default getStateToProps;
import { AuthStateType } from './authReducer.types';

const authInitialState: AuthStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  isRememberMe: false,
};

export default authInitialState;
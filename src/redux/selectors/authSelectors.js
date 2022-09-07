export const getUserId = state => {
  return state.auth.userId;
};

export const getEmail = state => {
  return state.auth.email;
};

export const getLogin = state => {
  return state.auth.login;
};

export const getIsAuth = state => {
  return state.auth.isAuth;
};

export const getPassword = state => {
  return state.auth.password;
};

export const getIsRememberMe = state => {
  return state.auth.isRememberMe;
};

export const getAuthStateToProps = state => {
  return {
    userId: getUserId(state),
    email: getEmail(state),
    login: getLogin(state),
    isAuth: getIsAuth(state),
    password: getPassword(state),
    isRememberMe: getIsRememberMe(state),
  }
};

const getStateToProps = state => {
  return {
    auth: getAuthStateToProps(state),
  };
};

export default getStateToProps;
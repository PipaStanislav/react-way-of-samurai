export type DataType = object

export type AuthUserIdType = number | null;

export type AuthEmailType = string | null;

export type AuthLoginType = string | null;

export type AuthPasswordType = string | null;

export type AuthIsAuthType = boolean;

export type AuthIsRememberMeType = boolean;

export type AuthStateType = {
  userId: AuthUserIdType,
  email: AuthEmailType,
  login: AuthLoginType,
  password: AuthPasswordType,
  isAuth: AuthIsAuthType,
  isRememberMe: AuthIsRememberMeType,
}
export type IsRememberMeType = boolean;

export type DataType = object

export type AuthStateType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  password: string | null,
  isAuth: boolean,
  isRememberMe: IsRememberMeType,
}
import { ThunkAction } from 'redux-thunk';
import { IdType, StateType } from '../../common/types';
import { ActionTypes } from '../action-creators/action-creators.types';
import { UserIdType } from '../user/user.types';

export type ParamsType = Partial<{
  id: IdType
  userId: UserIdType,
  password: string,
  isFollow: boolean,
  isRememberMe: boolean,
  email: string,
  offset: number,
  limit: number,
  status: string,
  authorId: UserIdType,
}>;

export type DispatchType = (a: any) => {};

export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>;

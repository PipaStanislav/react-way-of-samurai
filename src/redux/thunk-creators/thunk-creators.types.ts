import { ThunkAction } from 'redux-thunk';
import { IdType, StateType } from '../../common/types';
import { ActionTypes } from '../action-creators/action-creators.types';
import { UserIdType } from '../user/user.types';

export type ParamsType = {
  id?: IdType
  userId: UserIdType,
  password?: string,
  isFollow?: boolean,
  isRememberMe?: boolean,
};

export type DispatchType = (a: any) => {};

export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>;

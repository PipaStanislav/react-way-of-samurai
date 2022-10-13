import { ThunkAction } from 'redux-thunk';
import { StateType } from '../../common/types';
import { ActionTypes } from '../action-creators/action-creators.types';

export type ParamsType = {
  id: number
  userId: number,
  password: string,
  isFollow: boolean,
  isRememberMe: boolean,
};

export type DispatchType = (a: any) => {};

export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>;

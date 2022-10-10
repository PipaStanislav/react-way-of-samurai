import ActionInterface from '../../../common/interface';
import { DataType, UsersType } from './userReducer.types';
import { MetaDataType } from '../../../common/types';

export interface UserActionInterfaces extends ActionInterface {
  users?: UsersType,
  metaData?: MetaDataType,
  userId?: number,
  pageNumber?: number,
  data?: DataType,
}

import ActionInterface from '../../../common/interface';
import { DataType, IsRememberMeType } from './authReducer.types';

export interface AuthActionInterface extends ActionInterface {
  data?: DataType,
  isRememberMe?: IsRememberMeType,
}
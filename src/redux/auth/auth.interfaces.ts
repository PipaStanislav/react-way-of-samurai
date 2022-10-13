import { ActionInterface } from '../../common/interface';
import { DataType, AuthIsRememberMeType } from './auth.types';

export interface AuthActionInterface extends ActionInterface {
  data?: DataType,
  isRememberMe?: AuthIsRememberMeType,
}
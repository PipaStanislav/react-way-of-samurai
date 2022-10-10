import ActionInterface from '../../../common/interface';
import { IsFetchingType } from './preloaderReducer.types';

export interface PreloaderActionInterfaces extends ActionInterface {
  isFetching?: IsFetchingType;
}
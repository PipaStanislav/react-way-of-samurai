import { ActionInterface } from '../../common/interface';
import { IsFetchingType } from './preloader.types';

export interface PreloaderActionInterfaces extends ActionInterface {
  isFetching?: IsFetchingType;
}
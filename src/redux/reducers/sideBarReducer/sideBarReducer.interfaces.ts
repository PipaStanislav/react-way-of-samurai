import ActionInterface from '../../../common/interface';
import { FriendsType } from './sideBarReducer.types';

export interface SideBarInterfaces extends ActionInterface {
  friends: FriendsType
}
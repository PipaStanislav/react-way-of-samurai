import { ActionInterface } from '../../common/interface';
import { FriendsType } from './side-bar.types';

export interface SideBarInterfaces extends ActionInterface {
  friends: FriendsType
}
import DISPATCH_CONSTANTS from '../../../constants/dispatch/dispatch-constants'
import initialStore from './sidBarInitialState';
import { SideBarInterfaces } from './sideBarReducer.interfaces';
import { FriendsType, SideBareStateType } from './sideBarReducer.types';

const setFriends = (state: SideBareStateType, friends: FriendsType): SideBareStateType => {
  return { ...state, friendsBar: { ...state.friendsBar, friends } };
}

const sideBarReducer = (state: SideBareStateType = initialStore, action: SideBarInterfaces): SideBareStateType => {
  if (action.type === DISPATCH_CONSTANTS.SIDE_BAR.SET_FRIENDS) {
    return setFriends(state, action.friends);
  }

  return state;
}

export default sideBarReducer;
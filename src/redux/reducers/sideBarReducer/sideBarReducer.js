import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialStore from './sidBarInitialStore';

const setFriends = (state, friends) => {
  return { ...state, friendsBar: { ...state.friendsBar, friends } };
}

const sideBarReducer = (state = initialStore, action) => {
  if (action.type === DISPATCH_CONSTANTS.SIDE_BAR.SET_FRIENDS) {
    return setFriends(state, action.friends);
  }

  return state;
}

export default sideBarReducer;
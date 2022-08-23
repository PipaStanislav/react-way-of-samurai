import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialStore from './usersInitialStore';

const showMore = (state) => {
  return { ...state, limit: state.limit + state.showMore };
}

const follow = (state, userId) => {
  return {
    ...state,
    users: state.users.map((user) => user.id === userId ? { ...user, isFollow: true } : user),
  };
}

const unfollow = (state, userId) => {
  return {
    ...state,
    users: state.users.map((user) => user.id === userId ? { ...user, isFollow: false } : user),
  };
}

const userReducer = (state = initialStore, action) => {
  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SHOW_MORE) {
    return showMore(state);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW) {
    return follow(state, action.userId);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW) {
    return unfollow(state, action.userId);
  }

  return state;
}

export default userReducer;
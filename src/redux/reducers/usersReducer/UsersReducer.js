import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialStore from './usersInitialStore';
import USER_CONSTANTS from '../../../components/Users/constants/userConstants';

const setUsers = (state, users) => {
  return state.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
    ? { ...state, users: [...state.users, ...users] }
    : { ...state, users: [...users] };
};

const getMetaData = (state, metaData) => ({ ...state, ...metaData });

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

const displayUsers = (state) => {
  return {
    ...state,
    users: [],
    activePage: 1,
    displayUsers: state.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
      ? USER_CONSTANTS.DISPLAY_USERS.PAGES
      : USER_CONSTANTS.DISPLAY_USERS.LIST,
  };
}

const setActivePage = (state, page) => ({ ...state, activePage: page });

const setIsFetching = (state, isFetching) => {
  return {
    ...state,
    preloader: {
      ...state.preloader,
      isFetching,
    }
  };
}

const setIsFollowingUnfollowingInProgress = (state, { isFollowingUnfollowingInProgress, userId }) => {
  return {
    ...state,
    followingUnfollowingInProgress: isFollowingUnfollowingInProgress
      ? [...state.followingUnfollowingInProgress, userId]
      : state.followingUnfollowingInProgress.filter((id) => id !== userId),
  };
}

const userReducer = (state = initialStore, action) => {
  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_USERS) {
    return setUsers(state, action.users);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_META_DATA) {
    return getMetaData(state, action.metaData);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW) {
    return follow(state, action.userId);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW) {
    return unfollow(state, action.userId);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS) {
    return displayUsers(state);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE) {
    return setActivePage(state, action.pageNumber);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_IS_FETCHING) {
    return setIsFetching(state, action.isFetching);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.FOLLOWING_IN_PROGRESS) {
    return setIsFollowingUnfollowingInProgress(state, action.data);
  }

  return state;
}

export default userReducer;
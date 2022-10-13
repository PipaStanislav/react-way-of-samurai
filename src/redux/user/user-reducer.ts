import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants';
import initialStore from './user-initial-store';
import USER_CONSTANTS from '../../components/Users/constants/userConstants';
import { UserActionInterfaces } from './user.interfaces';
import {
  UserType,
  DataType,
  UsersType,
  UserIdType,
  UsersStateType,
  ActivePageType,
} from './user.types';
import { MetaDataType } from '../../common/types';

const setUsers = (state: UsersStateType, users: UsersType): UsersStateType => {
  return state.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
    ? { ...state, users: [...state.users, ...users] }
    : { ...state, users: [...users] };
};

const setMetaData = (state: UsersStateType, metaData: MetaDataType): UsersStateType => ({ ...state, ...metaData });

const follow = (state: UsersStateType, userId: UserIdType): UsersStateType => {
  return {
    ...state,
    users: state.users.map((user) => user.id === userId ? { ...user, isFollow: true } : user),
  };
};

const unfollow = (state: UsersStateType, userId: UserIdType): UsersStateType => {
  return {
    ...state,
    users: state.users.map((user) => user.id === userId ? { ...user, isFollow: false } : user),
  };
};

const displayUsers = (state: UsersStateType): UsersStateType => {
  return {
    ...state,
    users: [],
    activePage: 1,
    displayUsers: state.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
      ? USER_CONSTANTS.DISPLAY_USERS.PAGES
      : USER_CONSTANTS.DISPLAY_USERS.LIST,
  };
};

const setActivePage = (state: UsersStateType, page: ActivePageType): UsersStateType => ({ ...state, activePage: page });


const setIsFollowingUnfollowingInProgress = (
  state: UsersStateType,
  { isFollowingUnfollowingInProgress, userId }: DataType,
): UsersStateType => {
  return {
    ...state,
    followingUnfollowingInProgress: isFollowingUnfollowingInProgress
      ? [...state.followingUnfollowingInProgress, userId]
      : state.followingUnfollowingInProgress.filter((id) => id !== userId),
  };
};

const userReducer = (state: UsersStateType = initialStore, action: UserActionInterfaces): UsersStateType => {
  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_USERS) {
    return setUsers(state, action.users as Array<UserType>);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_META_DATA) {
    return setMetaData(state, action.metaData as MetaDataType);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.FOLLOW) {
    return follow(state, action.userId as UserIdType);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.UNFOLLOW) {
    return unfollow(state, action.userId as UserIdType);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.CHANGE_DISPLAY_USERS) {
    return displayUsers(state);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.SET_ACTIVE_PAGE) {
    return setActivePage(state, action.pageNumber as ActivePageType);
  }

  if (action.type === DISPATCH_CONSTANTS.USERS_PAGE.FOLLOWING_IN_PROGRESS) {
    return setIsFollowingUnfollowingInProgress(state, action.data as DataType);
  }

  return state;
};

export default userReducer;
import getAuthStateToProps from '../auth/auth-selectors';
import getPreloaderStateToProps from '../preloader/preloader-selectors';
import { CountType, LimitType, OffsetType, StateType, TotalCountType } from '../../common/types';
import {
  ActivePageType,
  DefaultDataType,
  DisplayUsers,
  FollowingUnfollowingInProgressType,
  UsersStateType,
  UsersType,
} from './user.types';

export const getUsers = (state: StateType): UsersType => state.usersPage.users;

export const getLimit = (state: StateType): LimitType => state.usersPage.limit;

export const getOffset = (state: StateType): OffsetType => state.usersPage.offset;

export const getCount = (state: StateType): CountType => state.usersPage.count;

export const getTotalCount = (state: StateType): TotalCountType => state.usersPage.totalCount;

export const getDisplayUsers = (state: StateType): DisplayUsers => state.usersPage.displayUsers;

export const getActivePage = (state: StateType): ActivePageType => state.usersPage.activePage;

export const getFollowingUnfollowingInProgress = (state: StateType): FollowingUnfollowingInProgressType => state.usersPage.followingUnfollowingInProgress;

export const getDefaultData = (state: StateType): DefaultDataType => state.usersPage.defaultData;

export const getUsersStateToProps = (state: StateType): UsersStateType => {
  return {
    users: getUsers(state),
    limit: getLimit(state),
    offset: getOffset(state),
    count: getCount(state),
    totalCount: getTotalCount(state),
    displayUsers: getDisplayUsers(state),
    activePage: getActivePage(state),
    followingUnfollowingInProgress: getFollowingUnfollowingInProgress(state),
    defaultData: getDefaultData(state),
  };
};

const getStateToProps = (state: StateType): UsersStateType => {
  return {
    ...getUsersStateToProps(state),
    ...getAuthStateToProps(state),
    ...getPreloaderStateToProps(state),
  };
};

export default getStateToProps;
import getAuthStateToProps from './authSelectors';
import getPreloaderStateToProps  from './preloaderSelectors';

export const getUsers = state => {
  return state.usersPage.users;
};

export const getLimit = state => {
  return state.usersPage.limit;
};

export const getOffset = state => {
  return state.usersPage.offset;
};

export const getCount = state => {
  return state.usersPage.count;
};

export const getTotalCount = state => {
  return state.usersPage.totalCount;
};

export const getDisplayUsers = state => {
  return state.usersPage.displayUsers;
};

export const getActivePage = state => {
  return state.usersPage.activePage;
};

export const getFollowingUnfollowingInProgress = state => {
  return state.usersPage.followingUnfollowingInProgress;
};

export const getDefaultData = state => {
  return state.usersPage.defaultData;
};

export const getUsersStateToProps = state => {
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
}

const getStateToProps = state => {
  return {
    ...getUsersStateToProps(state),
    ...getAuthStateToProps(state),
    ...getPreloaderStateToProps(state),
  };
}

export default getStateToProps;
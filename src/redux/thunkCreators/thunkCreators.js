import {
  setUsers,
  setProfile,
  setAuthData,
  setMetaData,
  followByUser,
  setIsFetching,
  unfollowByUser,
  setIsFollowingUnfollowingInProgress, setIsRememberMe,
} from '../actionCreators/actionCreators';
import userApiService from '../../api/user-api/user-api-service';
import profileApiService from '../../api/profile-api/profile-api-service';
import authApiService from '../../api/auth-api/auth-api-service';

export const getUsers = (params) => async (dispatch) => {
  dispatch(setIsFetching(true));

  const { data, metaData } = await userApiService.getUsers(params)
  dispatch(setUsers(data));
  dispatch(setMetaData(metaData));
  dispatch(setIsFetching(false));
};

export const followUnfollowByUser = ({ isFollow, userId, id }) => async (dispatch) => {
  dispatch(setIsFollowingUnfollowingInProgress({ isFollowingUnfollowingInProgress: true, userId }));

  let result;

  if (isFollow) {
    result = await userApiService.unfollow({ id, userId });
  } else {
    result = await userApiService.follow({ id, userId });
  }

  if (result) {
    if (isFollow) {
      dispatch(unfollowByUser(userId));
    } else {
      dispatch(followByUser(userId));
    }

    dispatch(setIsFollowingUnfollowingInProgress({ isFollowingUnfollowingInProgress: false, userId }));
  }
};

export const getProfile = (params) => async (dispatch) => {
  const profile = await profileApiService.getProfile(params);

  if (profile) {
    return dispatch(setProfile(profile));
  }
};

export const updateProfile = (params) => async (dispatch) => {
  const profile = await profileApiService.updateProfile(params);

  if (profile) {
    return dispatch(setProfile(profile));
  }
}

export const getAuthData = (params) => async (dispatch) => {
  const { data, error } = await authApiService.authMe();

  if (error) {
    throw error;
  }

  return dispatch(setAuthData(data));
};

export const login = (params) => async (dispatch) => {
  const { data, error } = await authApiService.login(params);

  if (error) {
    throw error;
  }

  if (params.isRememberMe) {
    dispatch(setIsRememberMe(params.isRememberMe));
    dispatch(setAuthData({ ...data, password: params.password }));
  }

  return dispatch(setAuthData(data));
};

import {
  setUsers,
  setProfile,
  setAuthData,
  setMetaData,
  followByUser,
  setIsFetching,
  unfollowByUser,
  setIsRememberMe,
  setProfilePosts,
  setProfilePostsMetaData,
  setIsFollowingUnfollowingInProgress,
  setDialogs,
  setDialogsMetaData,
  setDialog,
  setFriends,
  setInitializedSuccess,
  setMusics,
  setMusicsMetaData,
} from '../actionCreators/actionCreators';
import userApiService from '../../api/user-api/user-api-service';
import profileApiService from '../../api/profile-api/profile-api-service';
import authApiService from '../../api/auth-api/auth-api-service';
import postApiService from '../../api/post-api/post-api-service';
import dialogApiService from '../../api/dialog-api/dialog-api-service';
import musicApiService from '../../api/music-api/music-api-service';

export const requestUsers = (params) => async (dispatch) => {
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
    return dispatch(setAuthData({ ...data, password: params.password }));
  }

  return dispatch(setAuthData(data));
};

export const getProfilePosts = (params) => async (dispatch) => {
  dispatch(setIsFetching(true));

  const { data, metaData } = await postApiService.getPosts(params)

  dispatch(setProfilePosts(data));
  dispatch(setProfilePostsMetaData(metaData));

  dispatch(setIsFetching(false));
};

export const addProfilePost = (params) => async (dispatch) => {
  dispatch(setIsFetching(true));

  await postApiService.createPost(params);
  const { data, metaData } = await postApiService.getPosts({ userId: params.userId })

  dispatch(setProfilePosts(data));
  dispatch(setProfilePostsMetaData(metaData));

  dispatch(setIsFetching(false));
};

export const getDialogs = (params) => async (dispatch) => {
  const { data, metaData } = await dialogApiService.getDialogs(params);

  dispatch(setDialogs(data));
  dispatch(setDialogsMetaData(metaData));
};

export const getDialog = (params) => async (dispatch) => {
  const data = await dialogApiService.getDialog(params);

  dispatch(setDialog(data));
};

export const sendDialogMessage = (params) => async (dispatch) => {
  await dialogApiService.addMessage(params);
  const data = await dialogApiService.getDialog(params)
  dispatch(setDialog(data));
};

export const getFriends = (params) => async (dispatch) => {
  const { data } = await userApiService.getUsers(params)
  dispatch(setFriends(data))
};

export const initializeApp = (params) => async (dispatch) => {
  await dispatch(getAuthData());
  dispatch(setInitializedSuccess());
};

export const getMusics = (params) => async (dispatch) => {
  const result = await musicApiService.getMusics(params);

  await dispatch(setMusics(result.data));
  await dispatch(setMusicsMetaData(result.metaData));
};
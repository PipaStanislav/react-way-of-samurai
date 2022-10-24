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
} from '../action-creators/action-creators';
import userApiService from '../../api/user-api/user-api-service';
import profileApiService from '../../api/profile-api/profile-api-service';
import authApiService from '../../api/auth-api/auth-api-service';
import postApiService from '../../api/post-api/post-api-service';
import dialogApiService from '../../api/dialog-api/dialog-api-service';
import musicApiService from '../../api/music-api/music-api-service';
import { DispatchType, ParamsType, ThunkType } from './thunk-creators.types';


export const requestUsers = (params: ParamsType): ThunkType => async (dispatch) => {
  dispatch(setIsFetching(true));

  const { data, metaData } = await userApiService.getUsers(params)
  dispatch(setUsers(data));
  dispatch(setMetaData(metaData));
  dispatch(setIsFetching(false));
};

export const followUnfollowByUser = ({ isFollow, userId, id }: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  dispatch(setIsFollowingUnfollowingInProgress({ isFollowingUnfollowingInProgress: true, userId }));

  let result;

  if (isFollow) {
    result = await userApiService.unfollow({ id, userId });
  } else {
    result = await userApiService.follow({ id, userId });
  }

  if (result) {
    if (isFollow) {
      dispatch(unfollowByUser(userId!));
    } else {
      dispatch(followByUser(userId!));
    }

    dispatch(setIsFollowingUnfollowingInProgress({ isFollowingUnfollowingInProgress: false, userId }));
  }
};

export const getProfile = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const profile = await profileApiService.getProfile(params);

  if (profile) {
    dispatch(setProfile(profile));
  }
};

export const updateProfile = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const profile = await profileApiService.updateProfile(params);

  if (profile) {
    dispatch(setProfile(profile));
  }
}

export const getAuthData = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const { data, error } = await authApiService.authMe(params);

  if (error) {
    throw error;
  }

  dispatch(setAuthData(data));
};

export const login = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const { data, error } = await authApiService.login(params);

  if (error) {
    throw error;
  }

  if (params.isRememberMe) {
    dispatch(setIsRememberMe(params.isRememberMe));
    dispatch(setAuthData({ ...data, password: params.password }));
    return;
  }

  dispatch(setAuthData(data));
};

export const getProfilePosts = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  dispatch(setIsFetching(true));

  const { data, metaData } = await postApiService.getPosts(params)

  dispatch(setProfilePosts(data));
  dispatch(setProfilePostsMetaData(metaData));

  dispatch(setIsFetching(false));
};

export const addProfilePost = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  dispatch(setIsFetching(true));

  await postApiService.createPost(params);
  const { data, metaData } = await postApiService.getPosts(params)

  dispatch(setProfilePosts(data));
  dispatch(setProfilePostsMetaData(metaData));

  dispatch(setIsFetching(false));
};

export const getDialogs = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const { data, metaData } = await dialogApiService.getDialogs(params);

  dispatch(setDialogs(data));
  dispatch(setDialogsMetaData(metaData));
};

export const getDialog = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const data = await dialogApiService.getDialog(params);

  dispatch(setDialog(data));
};

export const sendDialogMessage = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  await dialogApiService.addMessage(params);
  const data = await dialogApiService.getDialog(params)
  dispatch(setDialog(data));
};

export const getFriends = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const { data } = await userApiService.getUsers(params)
  dispatch(setFriends(data))
};

export const initializeApp = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  await dispatch(getAuthData(params));
  dispatch(setInitializedSuccess());
};

export const getMusics = (params: ParamsType): ThunkType => async (dispatch: DispatchType) => {
  const { data, metaData } = await musicApiService.getMusics(params);

  await dispatch(setMusics(data));
  await dispatch(setMusicsMetaData(metaData));
};
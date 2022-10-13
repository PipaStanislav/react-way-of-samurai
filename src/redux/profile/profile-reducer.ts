import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants'
import initialStore from './profile-initial-state';
import { PostsType, PostType, ProfileStateType, ProfileType } from './profile.types';
import { MetaDataType } from '../../common/types';
import { ProfileActionInterfaces } from './profile.interfaces';

const setProfilePosts = (state: ProfileStateType, posts: PostsType): ProfileStateType => {
  return { ...state, posts: [...posts] };
}

const setProfilePostsMetaData = (state: ProfileStateType, metaData: MetaDataType): ProfileStateType => {
  return { ...state, metaData };
}

const setProfile = (state: ProfileStateType, profile: ProfileType): ProfileStateType => {
  return { ...state, profile };
}

const profileReducer = (state: ProfileStateType = initialStore, action: ProfileActionInterfaces): ProfileStateType => {
  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE) {
    return setProfile(state, action.profile as ProfileType);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS) {
    return setProfilePosts(state, action.profilePosts as Array<PostType>);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA) {
    return setProfilePostsMetaData(state, action.metaData as MetaDataType);
  }

  return state;
}

export default profileReducer;
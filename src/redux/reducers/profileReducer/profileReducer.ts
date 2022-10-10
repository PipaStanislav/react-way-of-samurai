import DISPATCH_CONSTANTS from '../../../constants/dispatch/dispatch-constants'
import initialStore from './profileInitialState';
import { PostsType, PostType, ProfileStateType, ProfileType } from './profileReducer.types';
import { MetaDataType } from '../../../common/types';
import { ProfileActionInterfaces } from './profileReducer.interfaces';

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
    return setProfile(state, <ProfileType>action.profile);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS) {
    return setProfilePosts(state, <Array<PostType>>action.profilePosts);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA) {
    return setProfilePostsMetaData(state, <MetaDataType>action.metaData);
  }

  return state;
}

export default profileReducer;
import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialStore from './profileInitialState';

const setProfilePosts = (state, posts) => {
  return { ...state, posts: [...posts] };
}

const setProfilePostsMetaData = (state, metaData) => {
  return { ...state, metaData };
}

const setProfile = (state, profile) => {
  return { ...state, profile };
}

const profileReducer = (state = initialStore, action) => {
  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE) {
    return setProfile(state, action.profile);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_PROFILE_POSTS) {
    return setProfilePosts(state, action.profilePosts);
  }

  if (action.type === DISPATCH_CONSTANTS.PROFILE_PAGE.SET_META_DATA) {
    return setProfilePostsMetaData(state, action.metaData);
  }

  return state;
}

export default profileReducer;
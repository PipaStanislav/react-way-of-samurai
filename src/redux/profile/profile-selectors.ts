import { MetaDataType, StateType } from '../../common/types';
import { newPostTextType, PostsType, ProfileStateType, ProfileType } from './profile.types';

export const getProfile = (state: StateType): ProfileType => <ProfileType>state.profilePage.profile;

export const getPosts = (state: StateType): PostsType => state.profilePage.posts;

export const getNewPostText = (state: StateType): newPostTextType => state.profilePage.newPostText;

export const getMetaData = (state: StateType): MetaDataType => state.profilePage.metaData;

export const getPreloaderStateToProps = (state: StateType): ProfileStateType => ({
  posts: getPosts(state),
  profile: getProfile(state),
  metaData: getMetaData(state),
  newPostText: getNewPostText(state),
});

const getStateToProps = (state: StateType): { profilePage: ProfileStateType } => ({
  profilePage: getPreloaderStateToProps(state),
});

export default getStateToProps;
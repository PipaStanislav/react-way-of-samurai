import { ProfileStateType } from './profile.types';

const profileInitialState: ProfileStateType = {
  newPostText: '',
  posts: [],
  profile: null,
  metaData: {
    offset: 0,
    limit: 10,
  }
};

export default profileInitialState;
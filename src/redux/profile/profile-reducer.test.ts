import { faker } from '@faker-js/faker';

import profileReducer from './profile-reducer';
import { setProfile, setProfilePosts, setProfilePostsMetaData } from '../action-creators/action-creators';

describe('Profile reducer', () => {
  const initialState = {
    newPostText: '',
    posts: [],
    profile: null,
    metaData: {
      offset: 0,
      limit: 10,
    },
  };

  const profile = {
    aboutMe: faker.lorem.sentence(),
    contacts: {
      facebook: `https://facebook.com/userName`,
      website: faker.internet.url(),
      instagram: `https://instagram.com/userName`,
      github: `https://github.com/userName`,
    },
    lookingForAJob: faker.datatype.boolean(),
    lookingForAJobDescription: faker.lorem.sentences(),
    fullName: 'fullName',
    userId: 1,
    avatar: {
      small: {
        src: '',
        title: '',
      },
      large: {
        src: '',
        title: '',
      }
    },
    status: faker.lorem.sentence(),
  };

  const posts = [
    {
      id: 1,
      userId: 1,
      message: faker.lorem.sentence(),
      likesCount: 0,
      authorId: 1,
    },
    {
      id: 2,
      userId: 1,
      message: faker.lorem.sentence(),
      likesCount: 0,
      authorId: 1,
    },
    {
      id: 3,
      userId: 1,
      message: faker.lorem.sentence(),
      likesCount: 0,
      authorId: 1,
    },
  ];

  test('set profile post', () => {
    const action = setProfilePosts(posts);
    const state = profileReducer(initialState, action);

    expect(state.posts.length).toBe(3);
    expect(state).toEqual({ ...initialState, posts });
  });

  test('set profile post meta data', () => {
    const metaData = { offset: 5, limit: 10 };
    const action = setProfilePostsMetaData(metaData);
    const state = profileReducer(initialState, action);

    expect(state.metaData).toEqual(metaData);
  });

  test('set profile', () => {
    const action = setProfile(profile);
    const state = profileReducer(initialState, action);

    expect(state.profile).toEqual(profile);
  });
});

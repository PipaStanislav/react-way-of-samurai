import { SideBareStateType } from './side-bar.types';

const sideBarInitialState: SideBareStateType = {
  navBar: [
    { id: 1, to: 'profile', title: 'Profile', hasPadding: false },
    { id: 2, to: 'dialogs', title: 'Messages', hasPadding: false },
    { id: 3, to: 'news', title: 'News', hasPadding: false },
    { id: 4, to: 'music', title: 'Music', hasPadding: false },
    { id: 5, to: 'users', title: 'Find users', hasPadding: true },
  ],

  friendsBar: {
    title: 'Friends',
    offset: 0,
    limit: 3,
    friends: [],
  }
};

export default sideBarInitialState;
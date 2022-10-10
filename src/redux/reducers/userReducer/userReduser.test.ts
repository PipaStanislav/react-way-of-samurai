import userReducer from './userReducer';
import USER_CONSTANTS from '../../../components/Users/constants/userConstants';
import {
  changeDisplayUsers,
  followByUser,
  setActivePage,
  setIsFollowingUnfollowingInProgress,
  setMetaData,
  setUsers
} from '../../actionCreators/actionCreators';

describe('Profile reducer', () => {
  const initialState = {
    offset: 0,
    limit: 10,
    count: 0,
    totalCount: 0,
    users: [],
    activePage: 1,
    displayUsers: USER_CONSTANTS.DISPLAY_USERS.LIST,
    followingUnfollowingInProgress: [],
    defaultData: {
      avatar: {
        src: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
        title: 'Avatar'
      }
    }
  };

  const users = [
    {
      id: 1,
      firstName: "Colleen",
      lastName: "Farrel",
      status: "Ducimus rem quisquam facere vitae.",
      isFollow: true,
      avatar: {
        small: {
          src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
          title: 'small'
        },
        large: {
          src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
          title: 'large'
        },
      },
      address: {
        country: "Angola",
        city: "West Jay"
      },
      fullName: "Colleen Farel"
    },
    {
      id: 2,
      firstName: "Uma",
      lastName: "Turman",
      status: "Ducimus rem quisquam facere vitae.",
      isFollow: false,
      avatar: {
        small: {
          src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
          title: 'small'
        },
        large: {
          src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
          title: 'large'
        },
      },
      address: {
        country: "Angola",
        city: "West Jay"
      },
      fullName: "Uma Turman"
    },
  ]

  test('set users', () => {
    const action = setUsers(users);
    const state = userReducer(initialState, action);

    expect(state.users.length).toBe(2);
    expect(state.users).toEqual(users);
  });

  test('set users meta data', () => {
    const metaData = {
      offset: 10,
      limit: 10
    };
    const action = setMetaData(metaData);
    const state = userReducer(initialState, action);

    expect(state.offset).toEqual(metaData.offset);
    expect(state.limit).toEqual(metaData.limit);
  });

  test('follow', () => {
    const actionA = setUsers(users);
    const stateA = userReducer(initialState, actionA);

    const actionB = followByUser(2);
    const stateB = userReducer(stateA, actionB);

    expect(stateB.users[1].isFollow).toBeTruthy();
  });

  test('unfollow', () => {
    const actionA = setUsers(users);
    const stateA = userReducer(initialState, actionA);

    const actionB = followByUser(1);
    const stateB = userReducer(stateA, actionB);

    expect(stateB.users[1].isFollow).toBeFalsy();
  });

  test('display Users', () => {
    const actionA = changeDisplayUsers();
    const stateA = userReducer(initialState, actionA);

    expect(stateA.users.length).toEqual(0);
    expect(stateA.users).toEqual([]);
    expect(stateA.activePage).toBe(1);
    expect(stateA.displayUsers).toBe(USER_CONSTANTS.DISPLAY_USERS.PAGES);

    const actionB = changeDisplayUsers();
    const stateB = userReducer(stateA, actionB);

    expect(stateB.users.length).toEqual(0);
    expect(stateB.users).toEqual([]);
    expect(stateB.activePage).toBe(1);
    expect(stateB.displayUsers).toBe(USER_CONSTANTS.DISPLAY_USERS.LIST);

  });

  test('set Active Page', () => {
    const activePage = 2;

    const action = setActivePage(activePage);
    const state = userReducer(initialState, action);

    expect(state.activePage).toEqual(activePage);
  });

  test('set Is Following Unfollowing In Progress', () => {
    const actionA = setIsFollowingUnfollowingInProgress({
      isFollowingUnfollowingInProgress: true,
      userId: 2,
    });
    // @ts-ignore
    const stateA = userReducer(initialState, actionA);

    expect(stateA.followingUnfollowingInProgress.length).toBe(1);
    expect(stateA.followingUnfollowingInProgress).toEqual([2]);

    const actionB = setIsFollowingUnfollowingInProgress({
      isFollowingUnfollowingInProgress: false,
      userId: 2,
    });
    // @ts-ignore
    const stateB = userReducer(stateA, actionB);

    expect(stateB.followingUnfollowingInProgress.length).toBe(0);
    expect(stateB.followingUnfollowingInProgress).toEqual([]);
  });
});

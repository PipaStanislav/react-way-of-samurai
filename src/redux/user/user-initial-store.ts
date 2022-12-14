import USER_CONSTANTS from '../../components/Users/constants/userConstants';
import { UsersStateType } from './user.types';

const userInitialState: UsersStateType = {
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

export default userInitialState;
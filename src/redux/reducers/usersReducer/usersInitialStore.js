import USER_CONSTANTS from '../../../components/Users/constants/userConstants';
import preloaderImage from '../../../assets/images/Spinner-1s-200px.svg';

export default {
  offset: 0,
  limit: 10,
  count: 0,
  totalCount: 0,
  users: [],
  activePage: 1,
  displayUsers: USER_CONSTANTS.DISPLAY_USERS.LIST,
  preloader: {
    isFetching: false,
    src: preloaderImage,
    alt: 'Spinner',
  },
};
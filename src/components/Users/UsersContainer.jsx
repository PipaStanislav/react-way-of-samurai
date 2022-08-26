import { connect } from 'react-redux';

import Users from './Users';
import {
  changeDisplayUsersActionCreator,
  getMetaDataActionCreator,
  getUsersActionCreator,
  setActivePageActionCreator, setIsFetchingActionCreator,
} from '../../utils/actionCreators';

const mapStateToProps = ({ usersPage }) => {
  return {
    users: usersPage.users,
    limit: usersPage.limit,
    offset: usersPage.offset,
    count: usersPage.count,
    totalCount: usersPage.totalCount,
    displayUsers: usersPage.displayUsers,
    activePage: usersPage.activePage,
    preloader: usersPage.preloader,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: users => {
      return dispatch(getUsersActionCreator(users));
    },

    getMetaData: metaData => {
      return dispatch(getMetaDataActionCreator(metaData));
    },

    setActivePage: pageNumber => {
      return dispatch(setActivePageActionCreator(pageNumber));
    },

    changeDisplayUsers: () => {
      return dispatch(changeDisplayUsersActionCreator());
    },

    setIsFetching: isFetching => {
      return dispatch(setIsFetchingActionCreator(isFetching))
    }
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;
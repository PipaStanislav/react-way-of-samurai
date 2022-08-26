import { connect } from 'react-redux';

import Users from './Users';
import { changeDisplayUsers, getMetaData, getUsers, setActivePage, setIsFetching } from '../../utils/actionCreators';

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

const mapDispatchToProps = { getUsers, getMetaData, setActivePage, changeDisplayUsers, setIsFetching };

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;
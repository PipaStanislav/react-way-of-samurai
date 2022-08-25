import { connect } from 'react-redux';

import Users from './Users';
import { getUsersActionCreator } from '../../utils/actionCreators';

const mapStateToProps = ({ usersPage }) => {
  return {
    users: usersPage.users,
    limit: usersPage.limit,
    offset: usersPage.offset,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: (users) => {
      return dispatch(getUsersActionCreator(users))
    }
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;
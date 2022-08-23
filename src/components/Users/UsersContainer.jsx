import { connect } from 'react-redux';

import Users from './Users';
import { showMoreUsersActionCreator } from '../../utils/actionCreators';

const mapStateToProps = ({ usersPage }) => {
  return {
    users: usersPage.users,
    limit: usersPage.limit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showMore: () => {
      return dispatch(showMoreUsersActionCreator());
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;
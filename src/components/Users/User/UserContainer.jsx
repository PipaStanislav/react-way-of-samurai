import { connect } from 'react-redux';

import { followByUserActionCreator, unfollowByUserActionCreator } from '../../../utils/actionCreators';
import User from './User';

const mapStateToProps = ({ users }) => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    follow: (userId) => {
      return dispatch(followByUserActionCreator(userId));
    },

    unFollow: (userId) => {
      return dispatch(unfollowByUserActionCreator(userId));
    }
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = connector(User);

export default UserContainer;
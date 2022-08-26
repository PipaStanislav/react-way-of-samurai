import { connect } from 'react-redux';

import { followByUser, unfollowByUser } from '../../../utils/actionCreators';
import User from './User';

const mapStateToProps = ({ users }) => {
  return {};
}

const mapDispatchToProps = { followByUser, unfollowByUser }

const connector = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = connector(User);

export default UserContainer;
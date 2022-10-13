import React from 'react';
import { connect } from 'react-redux';

import User from './User';
import { followUnfollowByUser } from '../../../redux/thunk-creators/thunk-creators';

const mapStateToProps = (props) => ({});

const mapDispatchToProps = { followUnfollowByUser };

class UserContainer extends React.Component {
  onClickFollowUnfollow = (isFollow, userId) => {
    this.props.followUnfollowByUser({ id: this.props.auth.userId, isFollow, userId })
  }

  render() {
    return (
      <User { ...this.props } onClickFollowUnfollow={ this.onClickFollowUnfollow }/>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
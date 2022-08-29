import React from 'react';
import { connect } from 'react-redux';

import {
  followByUser,
  setIsFollowingInProgress,
  unfollowByUser
} from '../../../utils/actionCreators';
import User from './User';
import userApiService from '../../../api/user-api/user-api-service';

const mapStateToProps = (props) => {
  return {};
}

const mapDispatchToProps = { followByUser, unfollowByUser, setIsFollowingInProgress };

class UserContainer extends React.Component {
  onClickFollowUnfollow = (isFollow, userId) => {
    this.props.setIsFollowingInProgress({ isFollowingInProgress: true, userId });

    if (isFollow) {
      return userApiService.unfollow({ id: this.props.auth.userId, userId }).then((response) => {
        if (response) {
          this.props.unfollowByUser(userId)
          this.props.setIsFollowingInProgress({ isFollowingInProgress: false, userId });
        }
      })
    }

    return userApiService.follow({ id: this.props.auth.userId, userId }).then((response) => {
      if (response) {
        this.props.followByUser(userId)
        this.props.setIsFollowingInProgress({ isFollowingInProgress: false, userId })
      }
    })
  }

  render() {
    return (
      <User { ...this.props } onClickFollowUnfollow={ this.onClickFollowUnfollow }/>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
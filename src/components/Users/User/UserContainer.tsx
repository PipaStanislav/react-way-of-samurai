import React, { FC } from 'react';
import { connect } from 'react-redux';

import User from './User';
import { followUnfollowByUser } from '../../../redux/thunk-creators/thunk-creators';
import { ParamsType } from '../../../redux/thunk-creators/thunk-creators.types';
import {
  FollowingUnfollowingInProgressType,
  UserDefaultDataType,
  UserIdType,
  UserType,
} from '../../../redux/user/user.types';
import { StateType } from '../../../common/types';
import { AuthStateType } from '../../../redux/auth/auth.types';

type PropsType = {
  user: UserType
  followingUnfollowingInProgress: FollowingUnfollowingInProgressType,
  auth: AuthStateType
  defaultData: UserDefaultDataType
}

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  followUnfollowByUser: (params: ParamsType) => void,
}

const mapStateToProps = (props: StateType): MapStateToPropsType => ({});

const mapDispatchToProps: MapDispatchToPropsType = { followUnfollowByUser };

class UserContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & PropsType> {
  onClickFollowUnfollow = (isFollow: boolean, userId: UserIdType): void => {
    this.props.followUnfollowByUser({ id: this.props.auth.userId!, isFollow, userId });
  };

  render = (): JSX.Element => {
    return (
      <User { ...this.props } onClickFollowUnfollow={ this.onClickFollowUnfollow }/>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import withRouter, { RouterType } from '../../hoc/withRouter';
import { getProfile, getProfilePosts } from '../../redux/thunk-creators/thunk-creators';
import withReactLazy from '../../hoc/withReactLazy';
import { AuthStateType } from '../../redux/auth/auth.types';
import { IdType, StateType } from '../../common/types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

const Profile = React.lazy(() => import('./Profile'));

type MapStateToPropsType = {
  auth: AuthStateType
}

type MapDispatchToPropsType = {
  getProfile: (params: ParamsType) => void,
  getProfilePosts: (params: ParamsType) => void,
}

const mapStateToProps = (props: StateType): MapStateToPropsType => ({
  auth: props.auth
});

const mapDispatchToProps: MapDispatchToPropsType = { getProfile, getProfilePosts };

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouterType> {
  componentDidMount = (): Promise<void> => {
    return this.setProfileAndPosts(this.props.router.params.id! || this.props.auth.userId!)
  }

  componentDidUpdate = (prevProps: RouterType): undefined | Promise<void> => {
    if (prevProps.router.params.id !== this.props.router.params.id) {
      return this.setProfileAndPosts(this.props.router.params.id! || this.props.auth.userId!)
    }
  }

  setProfile = (id: IdType): void => {
    return this.props.getProfile({ id })
  };

  setPosts = (params: ParamsType): void => {
    return this.props.getProfilePosts(params)
  }

  setProfileAndPosts = async (id: IdType): Promise<void> => {
    await this.setProfile(id);
    await this.setPosts({ userId: id });
  }

  render = (): JSX.Element => {
    return (
      <Profile/>
    )
  }
}


export default compose(
  withRouter,
  withAuthRedirect,
  withReactLazy,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
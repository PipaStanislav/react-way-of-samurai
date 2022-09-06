import { connect } from 'react-redux';

import React from 'react';
import Profile from './Profile';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter';
import { getProfile, getProfilePosts } from '../../redux/thunkCreators/thunkCreators';

const mapStateToProps = (props) => ({
  auth: props.auth
});

const mapDispatchToProps = { getProfile, getProfilePosts };

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    const profileId = this.props.router.params.id || this.props.auth.userId;

    this.setProfile(profileId);
    this.setPosts({ userId: profileId });
  }

  setPosts = (id) => {
    return this.props.getProfilePosts(id)
  }

  componentDidUpdate = (prevProps) => {
    let id;
    const prevId = prevProps.router.params.id;
    const currId = this.props.router.params.id;

    if (!currId) {
      id = this.props.auth.userId
    } else if (prevId !== currId) {
      id = currId
    }

    this.setProfile(id);
    this.setPosts({ userId: id });
  }

  setProfile = (id) => this.props.getProfile({ id });

  render() {
    return (
      <Profile/>
    )
  }
}


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
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
    return this.setProfileAndPosts(this.props.router.params.id || this.props.auth.userId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.id !== this.props.router.params.id) {
      return this.setProfileAndPosts(this.props.router.params.id || this.props.auth.userId)
    }
  }

  setProfile = (id) => {
    return this.props.getProfile({ id })
  };

  setPosts = (id) => {
    return this.props.getProfilePosts(id)
  }

  setProfileAndPosts = async (id) => {
    await this.setProfile(id);
    await this.setPosts({ userId: id });
  }

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
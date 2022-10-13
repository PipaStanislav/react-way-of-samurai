import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import withRouter from '../../hoc/withRouter';
import { getProfile, getProfilePosts } from '../../redux/thunk-creators/thunk-creators';
import withReactLazy from '../../hoc/withReactLazy';

const Profile = React.lazy(() => import('./Profile'));

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
  withReactLazy,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
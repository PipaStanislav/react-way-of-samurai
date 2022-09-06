import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MyPosts from './MyPosts';
import { getProfilePosts, addProfilePost } from '../../../redux/thunkCreators/thunkCreators';
import withRouter from '../../../hoc/withRouter';

const mapStateToProps = ({ profilePage, auth }) => {
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
    authUserId: auth.userId,
  };
}

const mapDispatchToProps = { addProfilePost, getProfilePosts };

class MyPostsContainer extends React.Component {
  render() {
    return (
      <MyPosts { ...this.props } userId={ this.props.router.params.id }/>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MyPostsContainer);
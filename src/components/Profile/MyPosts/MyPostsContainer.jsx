import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MyPosts from './MyPosts';
import { addProfilePost, getProfilePosts } from '../../../redux/thunkCreators/thunkCreators';
import withRouter from '../../../hoc/withRouter';

const mapStateToProps = ({ profilePage, auth }) => {
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
    authUserId: auth.userId,
  };
}

const mapDispatchToProps = { addProfilePost, getProfilePosts };

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) !== JSON.stringify(nextProps);
}

const MyPostsContainer = (props) => {
  return (
    <MyPosts { ...props } userId={ props.router.params.id || props.authUserId }/>
  );
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(React.memo(MyPostsContainer, areEqual));
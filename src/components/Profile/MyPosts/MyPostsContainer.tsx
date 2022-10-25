import React, { ComponentType, FC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MyPosts from './MyPosts';
import { addProfilePost, getProfilePosts } from '../../../redux/thunk-creators/thunk-creators';
import withRouter, { RouterType } from '../../../hoc/withRouter';
import { StateType } from '../../../common/types';
import { newPostTextType, PostsType } from '../../../redux/profile/profile.types';
import { AuthUserIdType } from '../../../redux/auth/auth.types';
import { ParamsType } from '../../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  posts: PostsType,
  newPostText: newPostTextType,
  authUserId: AuthUserIdType,
}

type MapDispatchToProps = {
  addProfilePost: (params: ParamsType) => void,
  getProfilePosts: (params: ParamsType) => void,
}

const mapStateToProps = ({ profilePage, auth }: StateType): MapStateToPropsType => ({
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
    authUserId: auth.userId,
});

const mapDispatchToProps: MapDispatchToProps = { addProfilePost, getProfilePosts };

const areEqual = (prevProps: any, nextProps: any): boolean => {
  return JSON.stringify(prevProps) !== JSON.stringify(nextProps);
}

const MyPostsContainer: FC<MapStateToPropsType & MapDispatchToProps & RouterType> = (props): JSX.Element => {
  return (
    <MyPosts { ...props } userId={ props.router.params.id || props.authUserId! }/>
  );
}

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MyPostsContainer, areEqual);
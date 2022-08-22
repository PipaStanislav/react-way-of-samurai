import { addPostActionCreator, updateNewPostActionCreator } from '../../../utils/actionCreators';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = ({ profilePage }) => {
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPost: text => {
      return dispatch(updateNewPostActionCreator(text));
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
import { addPost, updateNewPost } from '../../../utils/actionCreators';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = ({ profilePage }) => {
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
  };
}

const mapDispatchToProps = { addPost, updateNewPost };

const connector = connect(mapStateToProps, mapDispatchToProps);
const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
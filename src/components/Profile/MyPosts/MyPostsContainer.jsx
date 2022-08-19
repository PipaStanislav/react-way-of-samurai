import { addPostActionCreator, updateNewPostActionCreator } from '../../../utils/actionCreators';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const { profilePage } = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const updateNewPost = text => {
    return props.store.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <MyPosts posts={ profilePage.posts }
             newPostText={ profilePage.newPostText }
             addPost={ addPost }
             updateNewPost={ updateNewPost }/>
  )
}

export default MyPostsContainer;
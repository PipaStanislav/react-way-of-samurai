import { addPostActionCreator, updateNewPostActionCreator } from '../../../utils/actionCreators';
import MyPosts from './MyPosts';
import StoreContext from '../../../redux/StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { profilePage } = store.getState();

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          const updateNewPost = text => {
            return store.dispatch(updateNewPostActionCreator(text));
          }

          return (
            <MyPosts posts={ profilePage.posts }
                     newPostText={ profilePage.newPostText }
                     addPost={ addPost }
                     updateNewPost={ updateNewPost }/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
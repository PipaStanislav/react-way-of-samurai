import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { useRef } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../utils/actionCreator';

const MyPosts = (props) => {
  const newPostElement = useRef()

  const postsElements = props.state.map(({ id, message, likesCount }) => {
    return (
      <Post id={ id } key={ id } message={ message } likesCount={ likesCount }/>
    )
  })

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    return props.dispatch(updateNewPostActionCreator(newPostElement.current.value));
  }

  return (
    <div className={ styles.postsBlock }>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea ref={ newPostElement } onChange={ onPostChange } value={ props.newPostText }/>
        </div>

        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>

      <div className={ styles.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { useRef } from 'react';

const MyPosts = (props) => {
  const newPostElement = useRef()

  const postsElements = props.state.map(({ id, message, likesCount }) => {
    return (
      <Post id={id} key={id} message={message} likesCount={likesCount}/>
    )
  })

  const addPost = () => {
    const text = newPostElement.current.value;
    return alert(text);
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>

        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>

      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
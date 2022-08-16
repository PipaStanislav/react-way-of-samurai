import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map(({ id, message, likesCount }) => {
    return (
      <Post id={id} key={id} message={message} likesCount={likesCount}/>
    )
  })

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea name="" id=""></textarea>
        </div>

        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
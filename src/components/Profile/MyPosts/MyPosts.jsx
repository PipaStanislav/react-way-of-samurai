import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { posts, addPost, updateNewPost, newPostText } = props;

  const postsElements = posts.map(({ id, ...post }) => {
    return (
      <Post id={ id } key={ id } post={ post }/>
    )
  })

  const onAddPost = () => {
    return addPost();
  }

  const onPostChange = (event) => {
    return updateNewPost(event.currentTarget.value);
  }

  return (
    <div className={ styles.postsBlock }>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea onChange={ onPostChange } value={ newPostText }/>
        </div>

        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>

      <div className={ styles.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
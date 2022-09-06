import styles from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = (props) => {
  const { posts, addProfilePost, newPostText, userId, authUserId } = props;

  const postsElements = posts.map(({ id, ...post }) => {
    return (
      <Post id={ id } key={ id } post={ post }/>
    )
  })

  const onAddPost = (params, { resetForm }) => {
    addProfilePost({ ...params, userId, authorId: authUserId })
    return resetForm();
  }

  return (
    <div className={ styles.postsBlock }>
      <h1>My posts</h1>

      <div className={ styles.posts }>
        { postsElements }
      </div>

      <PostForm onAddPost={ onAddPost } newPostText={ newPostText } userId={ userId }/>
    </div>
  )
}

export default MyPosts;
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const posts = [
    { id: 1, message: 'Hi', likesCount: 0 },
    { id: 2, message: 'Hello', likesCount: 12 },
  ]

  const postsElements = posts.map(({ id, message, likesCount }) => {
    return (
      <Post id={id} message={message} likesCount={likesCount}/>
    )
  })

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea name="" id=""></textarea>
        </div>

        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
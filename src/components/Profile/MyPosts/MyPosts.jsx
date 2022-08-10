import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
        my posts

        <div>
          <textarea name="" id=""></textarea>
          <button>add post</button>
        </div>

        <div className={style.posts}>
          <Post />
        </div>
    </div>
  )
}

export default MyPosts;
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
        my posts

        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>

        <div className={style.posts}>
          <Post message='Hi' likesCount='0'/>
          <Post message='Hello' likesCount='23' />
        </div>
    </div>
  )
}

export default MyPosts;
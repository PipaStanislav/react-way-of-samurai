import styles from './Post.module.css';

const Post = (props) => {
  const { message, likesCount, user } = props.post;
  const { avatar } = user;

  return (
    <div  className={ styles.item }>
      <img src={ avatar.src } alt={ avatar.title }/>

      { message }

      <div>
        <span> like </span>
        { likesCount }
      </div>
    </div>
  )
}

export default Post;
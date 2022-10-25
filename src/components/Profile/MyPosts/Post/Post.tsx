import styles from './Post.module.css';
import { FC } from 'react';
import { PostType } from '../../../../redux/profile/profile.types';
import { IdType } from '../../../../common/types';

type PropsType = {
  id: IdType,
  post: PostType
}

const Post: FC<PropsType> = (props): JSX.Element => {
  const { message, likesCount, user } = props.post;
  const { avatar } = user;

  return (
    <div  className={ styles.item }>
      <img src={ avatar.large.src } alt={ avatar.large.title }/>

      { message }

      <div>
        <span> like </span>
        { likesCount }
      </div>
    </div>
  )
}

export default Post;
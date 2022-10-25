import { FC } from 'react';

import styles from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { newPostTextType, PostsType } from '../../../redux/profile/profile.types';
import { AuthUserIdType } from '../../../redux/auth/auth.types';
import { ParamsType } from '../../../redux/thunk-creators/thunk-creators.types';
import { UserIdType } from '../../../redux/user/user.types';

export type ValuesType = {
  message: newPostTextType,
}

type PropsType = {
  userId: UserIdType,
  posts: PostsType,
  newPostText: newPostTextType,
  authUserId: AuthUserIdType,
  addProfilePost: (params: ParamsType) => void,
}

type FormType = {
  resetForm: () => void
}

const MyPosts: FC<PropsType> = (props): JSX.Element => {
  const { posts, addProfilePost, newPostText, userId, authUserId } = props;

  const postsElements = posts.map(({ id, ...post }) => {
    return (
      <Post id={ id } key={ id } post={ { id, ...post } }/>
    )
  })

  const onAddPost = (params: ValuesType, { resetForm }: FormType) => {
    addProfilePost({ ...params, userId, authorId: authUserId! })
    return resetForm();
  }

  return (
    <div className={ styles.postsBlock }>
      <h1>My posts</h1>

      <div className={ styles.posts }>
        { postsElements }
      </div>

      <PostForm onAddPost={ onAddPost } newPostText={ newPostText }/>
    </div>
  )
}

export default MyPosts;
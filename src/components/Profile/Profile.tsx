import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import { FC } from 'react';

type PropsType = {}

const Profile: FC<PropsType> = (props): JSX.Element => {
  return (
    <div className={ styles.profile }>
      <ProfileInfoContainer/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
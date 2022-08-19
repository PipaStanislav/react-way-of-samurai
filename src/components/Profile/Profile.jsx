import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
  return (
    <div className={ styles.profile }>
      <ProfileInfoContainer store={ props.store }/>
      <MyPostsContainer store={ props.store }/>
    </div>
  )
}

export default Profile;
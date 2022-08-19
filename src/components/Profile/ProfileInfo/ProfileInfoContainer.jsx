import styles from './ProfileInfo.module.css';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = (props) => {
  const state = props.store.getState();

  return (
    <ProfileInfo info={ state.profilePage.info }/>
  )
}

export default ProfileInfoContainer;
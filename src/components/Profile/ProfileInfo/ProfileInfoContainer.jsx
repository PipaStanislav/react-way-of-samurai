import ProfileInfo from './ProfileInfo';
import StoreContext from '../../../redux/StoreContext';

const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();

          return (
            <ProfileInfo info={ state.profilePage.info }/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default ProfileInfoContainer;
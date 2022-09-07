import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader preloader={ props.preloader }/>
  }

  return (
    <div>
      <div className={ styles.descriptionBlock }>
        <div className={ styles.photoSection }>
          <img src={ props.profile.avatar.large.src } alt={ props.profile.avatar.large.title }/>
        </div>

        <div className={ styles.infoSection }>
          <ProfileStatus
            status={ props.profile.status }
            profileUserId={ props.profile.userId }
            updateProfile={ props.updateProfile }
            auth={ props.auth }
          />

          <div className={ styles.info }><span>Full name: </span> { props.profile.fullName }</div>
          <div className={ styles.info }><span>About Me:</span> { props.profile.aboutMe }</div>
          <div className={ styles.info }>
            <span>Looking for a job: </span> { props.profile.lookingForAJob ? 'Yes' : 'No' }</div>
          <div className={ styles.info }><span>Job description: </span> { props.profile.lookingForAJobDescription }
          </div>
          {
            Object.keys(props.profile.contacts).map((contactKey, index) => {
              return (
                <div className={ styles.info } key={ index }>
                  <span>{ contactKey }: </span> <a
                  href={ props.profile.contacts[contactKey] }>{ props.profile.contacts[contactKey] }</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={ styles.profileInfo }>
      <div className={ styles.backgroundBlock }>
        <img src={ props.state.background.src } alt={ props.state.background.title }/>
      </div>

      <div className={ styles.descriptionBlock }>
        <img src={ props.state.description.src } alt={ props.state.description.title }/>
        { props.state.description.text }
      </div>
    </div>
  )
}

export default ProfileInfo;
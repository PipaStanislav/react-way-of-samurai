import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { background, description } = props.info;

  return (
    <div className={ styles.profileInfo }>
      <div className={ styles.backgroundBlock }>
        <img src={ background.src } alt={ background.title }/>
      </div>

      <div className={ styles.descriptionBlock }>
        <img src={ description.src } alt={ description.title }/>
        { description.text }
      </div>
    </div>
  )
}

export default ProfileInfo;
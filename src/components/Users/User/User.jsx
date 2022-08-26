import styles from './User.module.css';

const User = (props) => {
  const { user, unfollowByUser, followByUser } = props;
  const { avatar, fullName, status, address, isFollow } = user;

  const onClickFollowUnfollow = () => {
    return isFollow ? unfollowByUser(user.id) : followByUser(user.id);
  }

  return (
    <div className={ styles.item }>
      <div className={ styles.avatar }>
        <img src={ avatar.src } alt={ avatar.title }/>
        <button onClick={ onClickFollowUnfollow }> { `${ isFollow ? 'Unfollow' : 'Follow' }` } </button>
      </div>

      <div className={ styles.userInfo }>
        <div>
          <h3>{ fullName }</h3>
          <h3>{ address.country } <br/>{ address.city }</h3>
        </div>

        <p>{ status }</p>
      </div>
    </div>
  )
}

export default User;
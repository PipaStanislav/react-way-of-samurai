import styles from './User.module.css';

const User = (props) => {
  const { user, unFollow, follow } = props;
  const { avatar, fullName, status, address, isFollow } = user;

  const onClickFollowUnfollow = () => {
    return isFollow ? unFollow(user.id) : follow(user.id);
  }

  return (
    <div className={ styles.item }>
      <div className={ styles.avatar }>
        <img src={ avatar.src } alt={ avatar.title }/>
        <button onClick={ onClickFollowUnfollow }> { `${ isFollow ? 'Unfollow' : 'Follow' }` } </button>
      </div>

      <div className={ styles.userInfo }>
        <div className={ styles.test }>
          <h3>{ fullName }</h3>
          <h3>{ address.country } <br/>{ address.city }</h3>
        </div>

        <p>{ status }</p>
      </div>
    </div>
  )
}

export default User;
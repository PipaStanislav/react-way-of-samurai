import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  const { user, onClickFollowUnfollow } = props;
  const { avatar, fullName, status, address, isFollow } = user;


  return (
    <div className={ styles.item }>
      <div className={ styles.avatar }>
        <NavLink to={ `/profile/${user.id}` }>
          <img src={ avatar.large.src } alt={ avatar.large.title }/>
        </NavLink>
        <button onClick={ () => onClickFollowUnfollow(isFollow, user.id) }> { `${ isFollow ? 'Unfollow' : 'Follow' }` } </button>
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
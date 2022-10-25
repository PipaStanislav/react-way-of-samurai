import styles from './User.module.css';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import {
  FollowingUnfollowingInProgressType,
  UserDefaultDataType,
  UserIdType,
  UserType,
} from '../../../redux/user/user.types';

type PropsType = {
  user: UserType,
  defaultData: UserDefaultDataType,
  followingUnfollowingInProgress: FollowingUnfollowingInProgressType,

  onClickFollowUnfollow: (isFollow: boolean, userId: UserIdType) => void,
}

const User: FC<PropsType> = (props): JSX.Element => {
  const { user, onClickFollowUnfollow, followingUnfollowingInProgress, defaultData } = props;
  const { avatar, fullName, status, address, isFollow } = user;

  return (
    <div className={ styles.item }>
      <div className={ styles.avatar }>
        <NavLink to={ `/profile/${ user.id }` }>
          <img src={ avatar.large.src || defaultData.avatar.src } alt={ avatar.large.title || defaultData.avatar.title }/>
        </NavLink>
        <button
          disabled={ followingUnfollowingInProgress.includes(user.id) }
          onClick={ () => onClickFollowUnfollow(isFollow, user.id) }
        >

          { `${ isFollow ? 'Unfollow' : 'Follow' }` }
        </button>
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
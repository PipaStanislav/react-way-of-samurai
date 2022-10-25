import styles from './Users.module.css';
import USER_CONSTANTS from './constants/userConstants';
import React, { FC } from 'react';
import UserContainer from './User/UserContainer';
import {
  ActivePageType,
  DisplayUsersType,
  FollowingUnfollowingInProgressType,
  UserDefaultDataType,
  UsersType,
} from '../../redux/user/user.types';
import { AuthStateType } from '../../redux/auth/auth.types';
import { LimitType, TotalCountType } from '../../common/types';

type PropsType = {
  auth: AuthStateType,
  defaultData: UserDefaultDataType,
  followingUnfollowingInProgress: FollowingUnfollowingInProgressType,
  users: UsersType
  displayUsers: DisplayUsersType,
  totalCount: TotalCountType,
  limit: LimitType,
  activePage: ActivePageType,
  onChangeDisplayUsers: () => void,
  onShowMore: () => void,
  onSetActivePage: (pageNumber: number) => void,
}

const generateUserElements = (props: PropsType): Array<JSX.Element> => {
  return props.users.map((user) => {
    return (
      <UserContainer
        key={ user.id }
        user={ user }
        followingUnfollowingInProgress={ props.followingUnfollowingInProgress }
        auth={ props.auth }
        defaultData={ props.defaultData }
      />
    );
  });
};

const showMoreButtonElement: FC<PropsType> = (props): JSX.Element => {
  return (
    <div
      className={ `${ styles.showMore } ${ props.users.length === props.totalCount ? styles.hideShowMoreButton : '' }` }>
      <button onClick={ props.onShowMore }>Show more</button>
    </div>
  );
};

const pagesButtonsElements: FC<PropsType> = (props): JSX.Element => {
  const pagesCount: number = Math.ceil(props.totalCount / props.limit);

  const elements: Array<JSX.Element> = Array(pagesCount).fill(null).map((value, index) => {
    const count = index + 1;

    return (
      <span
        onClick={ () => props.onSetActivePage(count) }
        className={ `${ styles.page } ${ props.activePage === count ? styles.selected : '' } ` }
        key={ count }
      >
          { count }
      </span>
    );
  });

  return (
    <div className={ styles.pages }>
      { elements }
    </div>
  );
};

const Users: FC<PropsType> = (props): JSX.Element => {
  return (
    <div className={ styles.users }>
      <div className={ styles.usersDisplay }>
        <button onClick={ props.onChangeDisplayUsers }> {
          props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
            ? USER_CONSTANTS.DISPLAY_USERS.PAGES
            : USER_CONSTANTS.DISPLAY_USERS.LIST
        } </button>
      </div>
      <h2> Users </h2>

      <div className={ styles.items }>
        { generateUserElements(props) }
      </div>

      {
        props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
          ? showMoreButtonElement(props)
          : pagesButtonsElements(props)
      }

    </div>
  );
};

export default Users;
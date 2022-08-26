import React from 'react';

import styles from './Users.module.css';
import UserContainer from './User/UserContainer';
import userApiService from '../../api/user-api/user-api-service';
import USER_CONSTANTS from './constants/userConstants';

class Users extends React.Component {
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    return userApiService.getUsers(this.getQuery()).then(({ data, metaData }) => {
      this.props.getUsers(data);
      this.props.getMetaData(metaData)
    })
  }

  getQuery = () => {
    return this.props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
      ? { offset: this.props.users.length, limit: this.props.limit + this.props.users.length }
      : {
        offset: (this.props.limit * this.props.activePage) - this.props.limit,
        limit: this.props.limit * this.props.activePage
      };
  }

  onShowMore = () => {
    return this.getUsers();
  }

  generateUserElements = () => {
    return this.props.users.map((user) => {
      return (
        <UserContainer key={ user.id } user={ user }/>
      )
    })
  }

  onChangeDisplayUsers = async () => {
    await this.props.changeDisplayUsers();
    return this.getUsers();
  }

  showMoreButtonElement = () => {
    return (
      <div
        className={ `${ styles.showMore } ${ this.props.users.length === this.props.totalCount ? styles.hideShowMoreButton : '' }` }>
        <button onClick={ this.onShowMore }>Show more</button>
      </div>
    );
  }

  onSetActivePage = async (pageNumber) => {
    await this.props.setActivePage(pageNumber);

    return this.getUsers();
  }

  pagesButtonsElements = () => {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.limit);

    const elements = Array(pagesCount).fill(null).map((value, index) => {
      const count = index + 1;

      return (
        <span
          onClick={ () => this.onSetActivePage(count) }
          className={ `${ styles.page } ${ this.props.activePage === count ? styles.selected : '' } ` }
          key={ count }
        >
          { count }
        </span>
      );
    })

    return (
      <div className={ styles.pages }>
        { elements }
      </div>
    );
  }

  render = () => {
    const usersElements = this.generateUserElements();

    return (
      <div className={ styles.users }>
        <div className={ styles.usersDisplay }>
          <button onClick={ this.onChangeDisplayUsers }> {
            this.props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
              ? USER_CONSTANTS.DISPLAY_USERS.PAGES
              : USER_CONSTANTS.DISPLAY_USERS.LIST
          } </button>
        </div>
        <h2> Users </h2>

        <div className={ styles.items }>
          { usersElements }
        </div>

        {
          this.props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
            ? this.showMoreButtonElement()
            : this.pagesButtonsElements()
        }

      </div>
    );
  }

}

export default Users;
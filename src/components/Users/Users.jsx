import React from 'react';

import userApiService from '../../api/user-api/user-api-service';
import USER_CONSTANTS from './constants/userConstants';
import UsersPresentational from './UsersPresentational';
import Preloader from '../common/preloader/preloader';

class Users extends React.Component {
  componentDidMount = () => {
    return this.getUsers();
  }

  getUsers = async () => {
    await this.props.setIsFetching(true);

    return userApiService.getUsers(this.getQuery()).then(async ({ data, metaData }) => {
      this.props.getUsers(data);
      this.props.getMetaData(metaData)
      this.props.setIsFetching(false);
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

  onChangeDisplayUsers = async () => {
    await this.props.changeDisplayUsers();

    return this.getUsers();
  }

  onSetActivePage = async (pageNumber) => {
    await this.props.setActivePage(pageNumber);

    return this.getUsers();
  }

  render = () => {
    return <>
      { this.props.preloader.isFetching ? <Preloader preloader={ this.props.preloader }/> : null }

      <UsersPresentational
        users={ this.props.users }
        totalCount={ this.props.totalCount }
        limit={ this.props.limit }
        activePage={ this.props.activePage }
        displayUsers={ this.props.displayUsers }

        onShowMore={ this.onShowMore }
        onSetActivePage={ this.onSetActivePage }
        onChangeDisplayUsers={ this.onChangeDisplayUsers }
      />
    </>
  }

}

export default Users;
import React from 'react';

import userApiService from '../../api/user-api/user-api-service';
import USER_CONSTANTS from './constants/userConstants';
import UsersPresentational from './UsersPresentational';

class Users extends React.Component {
  componentDidMount = () => {
    return this.getUsers();
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

  onChangeDisplayUsers = async () => {
    await this.props.changeDisplayUsers();

    return this.getUsers();
  }

  onSetActivePage = async (pageNumber) => {
    await this.props.setActivePage(pageNumber);

    return this.getUsers();
  }

  render = () => {
    return <UsersPresentational
      users={this.props.users}
      totalCount={this.props.totalCount}
      limit={this.props.limit}
      activePage={this.props.activePage}
      displayUsers={this.props.displayUsers}


      onShowMore={this.onShowMore}
      onSetActivePage={this.onSetActivePage}
      onChangeDisplayUsers={this.onChangeDisplayUsers}
    />
  }

}

export default Users;
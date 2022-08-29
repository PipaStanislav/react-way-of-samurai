import { connect } from 'react-redux';

import { changeDisplayUsers, getMetaData, setUsers, setActivePage, setIsFetching } from '../../utils/actionCreators';
import React from 'react';
import userApiService from '../../api/user-api/user-api-service';
import USER_CONSTANTS from './constants/userConstants';
import Preloader from '../common/preloader/preloader';
import Users from './Users';

const mapStateToProps = ({ usersPage }) => {
  return {
    users: usersPage.users,
    limit: usersPage.limit,
    offset: usersPage.offset,
    count: usersPage.count,
    totalCount: usersPage.totalCount,
    displayUsers: usersPage.displayUsers,
    activePage: usersPage.activePage,
    preloader: usersPage.preloader,
  };
};

const mapDispatchToProps = { setUsers, getMetaData, setActivePage, changeDisplayUsers, setIsFetching };

class UsersContainer extends React.Component {
  componentDidMount = () => {
    return this.setUsers();
  }

  setUsers = async () => {
    await this.props.setIsFetching(true);

    return userApiService.getUsers(this.getQuery()).then(async ({ data, metaData }) => {
      this.props.setUsers(data);
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
    return this.setUsers();
  }

  onChangeDisplayUsers = async () => {
    await this.props.changeDisplayUsers();

    return this.setUsers();
  }

  onSetActivePage = async (pageNumber) => {
    await this.props.setActivePage(pageNumber);

    return this.setUsers();
  }

  render = () => {
    return <>
      { this.props.preloader.isFetching ? <Preloader preloader={ this.props.preloader }/> : null }

      <Users
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
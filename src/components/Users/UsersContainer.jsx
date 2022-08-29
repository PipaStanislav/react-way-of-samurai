import React from 'react';
import { connect } from 'react-redux';

import {
  changeDisplayUsers,
  setUsers,
  setActivePage,
  setIsFetching,
  setMetaData, followByUser, unfollowByUser
} from '../../utils/actionCreators';
import userApiService from '../../api/user-api/user-api-service';
import USER_CONSTANTS from './constants/userConstants';
import Preloader from '../common/preloader/preloader';
import Users from './Users';

const mapStateToProps = ({ usersPage, auth }) => {
  return {
    auth,
    users: usersPage.users,
    limit: usersPage.limit,
    offset: usersPage.offset,
    count: usersPage.count,
    totalCount: usersPage.totalCount,
    displayUsers: usersPage.displayUsers,
    activePage: usersPage.activePage,
    preloader: usersPage.preloader,
    followingInProgress: usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  setUsers,
  followByUser,
  unfollowByUser,
  setMetaData,
  setActivePage,
  changeDisplayUsers,
  setIsFetching
};

class UsersContainer extends React.Component {
  componentDidMount = () => {
    return this.setUsers();
  }

  setUsers = async () => {
    this.props.setIsFetching(true);

    return userApiService.getUsers(this.getQuery()).then(async ({ data, metaData }) => {
      this.props.setUsers(data);
      this.props.setMetaData(metaData)
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

  onChangeDisplayUsers = () => {
    this.props.changeDisplayUsers();

    return this.setUsers();
  }

  onSetActivePage = (pageNumber) => {
    this.props.setActivePage(pageNumber);

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
        auth={ this.props.auth }
        followingInProgress={this.props.followingInProgress}

        onShowMore={ this.onShowMore }
        onSetActivePage={ this.onSetActivePage }
        onChangeDisplayUsers={ this.onChangeDisplayUsers }
        followByUser={ this.followByUser }
        unfollowByUser={ unfollowByUser }
      />
    </>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
import React from 'react';
import { connect } from 'react-redux';

import USER_CONSTANTS from './constants/userConstants';

import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { changeDisplayUsers, setActivePage } from '../../redux/actionCreators/actionCreators';
import { getUsers } from '../../redux/thunkCreators/thunkCreators';

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
    followingUnfollowingInProgress: usersPage.followingUnfollowingInProgress,
    defaultData: usersPage.defaultData,
  };
};

const mapDispatchToProps = {
  setActivePage,
  changeDisplayUsers,
  getUsers,
};

class UsersContainer extends React.Component {
  componentDidMount = () => {
    return this.setUsers();
  }

  setUsers = async () => {
    this.props.getUsers(this.getQuery());
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

  onSetActivePage = async pageNumber => {
    await this.props.setActivePage(pageNumber);

    return this.setUsers();
  }

  render = () => {
    return (
      <>
        { this.props.preloader.isFetching ? <Preloader preloader={ this.props.preloader }/> : null }

        <Users
          users={ this.props.users }
          totalCount={ this.props.totalCount }
          limit={ this.props.limit }
          activePage={ this.props.activePage }
          displayUsers={ this.props.displayUsers }
          auth={ this.props.auth }
          followingUnfollowingInProgress={ this.props.followingUnfollowingInProgress }
          defaultData={ this.props.defaultData }

          onShowMore={ this.onShowMore }
          onSetActivePage={ this.onSetActivePage }
          onChangeDisplayUsers={ this.onChangeDisplayUsers }
        />
      </>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import USER_CONSTANTS from './constants/userConstants';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import getStateToProps from '../../redux/selectors/userSelectors';
import { requestUsers } from '../../redux/thunkCreators/thunkCreators';
import { changeDisplayUsers, setActivePage } from '../../redux/actionCreators/actionCreators';

const mapStateToProps = state => {
  return getStateToProps(state);
};

const mapDispatchToProps = {
  setActivePage,
  changeDisplayUsers,
  requestUsers,
};

class UsersContainer extends React.Component {
  componentDidMount = () => {
    return this.requestUsers();
  }

  requestUsers = async () => {
    this.props.requestUsers(this.getQuery());
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
    return this.requestUsers();
  }

  onChangeDisplayUsers = async () => {
    await this.props.changeDisplayUsers();

    return this.requestUsers();
  }

  onSetActivePage = async pageNumber => {
    await this.props.setActivePage(pageNumber);

    return this.requestUsers();
  }

  render = () => {
    if (this.props.preloader.isFetching) {
      return (
        <Preloader preloader={this.props.preloader}/>
      );
    }

    return (
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
    )
  }

}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)
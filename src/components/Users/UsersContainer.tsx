import React, { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import USER_CONSTANTS from './constants/userConstants';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import getStateToProps from '../../redux/user/user-selectors';
import { requestUsers } from '../../redux/thunk-creators/thunk-creators';
import { changeDisplayUsers, setActivePage } from '../../redux/action-creators/action-creators';
import { LimitType, OffsetType, StateType } from '../../common/types';
import { AuthStateType } from '../../redux/auth/auth.types';
import { PreloaderStateType } from '../../redux/preloader/preloader.types';
import { UsersStateType } from '../../redux/user/user.types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = UsersStateType & { auth: AuthStateType, preloader: PreloaderStateType };

type MapDispatchToPropsType = {
  setActivePage: (pageNumber: number) => void,
  changeDisplayUsers: () => void,
  requestUsers: (params: ParamsType) => void,
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return getStateToProps(state);
};

const mapDispatchToProps: MapDispatchToPropsType = {
  setActivePage,
  changeDisplayUsers,
  requestUsers,
};

class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
  componentDidMount = (): Promise<void> => {
    return this.requestUsers();
  }

  requestUsers = async (): Promise<void> => {
    this.props.requestUsers(this.getQuery());
  }

  getQuery = (): { offset: OffsetType, limit: LimitType } => {
    return this.props.displayUsers === USER_CONSTANTS.DISPLAY_USERS.LIST
      ? { offset: this.props.users.length, limit: this.props.limit + this.props.users.length }
      : {
        offset: (this.props.limit * this.props.activePage) - this.props.limit,
        limit: this.props.limit * this.props.activePage
      };
  }

  onShowMore = (): Promise<void> => {
    return this.requestUsers();
  }

  onChangeDisplayUsers = async (): Promise<void> => {
    await this.props.changeDisplayUsers();

    return this.requestUsers();
  }

  onSetActivePage = async (pageNumber: number): Promise<void> => {
    await this.props.setActivePage(pageNumber);

    return this.requestUsers();
  }

  render = (): JSX.Element => {
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

export default compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)
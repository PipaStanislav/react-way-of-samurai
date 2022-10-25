import React from 'react';
import { connect } from 'react-redux';
import { NavLinkProps } from 'react-router-dom';

import Header from './Header';
import { getAuthData } from '../../redux/thunk-creators/thunk-creators';
import { logOut } from '../../redux/action-creators/action-creators';
import { StateType } from '../../common/types';
import { UserIdType } from '../../redux/user/user.types';
import { AuthIsAuthType, AuthLoginType } from '../../redux/auth/auth.types';
import { LogoType } from '../../redux/header/header.types';
import { LogOutType } from '../../redux/action-creators/action-creators.types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  logo: LogoType,
  isAuth: AuthIsAuthType,
  userId: UserIdType,
  login: AuthLoginType,
}

const mapStateToProps = ({ header, auth }: StateType): MapStateToPropsType => {
  return {
    logo: header.logo,
    isAuth: auth.isAuth,
    userId: auth.userId!,
    login: auth.login,
  };
}

type MapDispatchToProps = {
  getAuthData: (params: ParamsType) => void,
  logOut: () => LogOutType,
}

const mapDispatchToProps = { getAuthData, logOut };

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToProps & NavLinkProps> {
  render() {
    return (
      <Header { ...this.props } />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
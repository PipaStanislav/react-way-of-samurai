import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { getAuthData } from '../../redux/thunk-creators/thunk-creators';
import { logOut } from '../../redux/action-creators/action-creators';

const mapStateToProps = ({ header, auth }) => {
  return {
    logo: header.logo,
    isAuth: auth.isAuth,
    userId: auth.userId,
    login: auth.login
  };
}

const mapDispatchToProps = { getAuthData, logOut };

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header { ...this.props } />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
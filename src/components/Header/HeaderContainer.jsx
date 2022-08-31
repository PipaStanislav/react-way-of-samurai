import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthData } from '../../redux/thunkCreators/thunkCreators';

const mapStateToProps = ({ header, auth }) => {
  return {
    logo: header.logo,
    isAuth: auth.isAuth,
    userId: auth.userId,
    login: auth.login
  };
}

const mapDispatchToProps = { getAuthData };

class HeaderContainer extends React.Component {
  componentDidMount = () => {
    return this.setAuthData();
  }

  setAuthData = () => this.props.getAuthData();

  render() {
    return (
      <Header { ...this.props }/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
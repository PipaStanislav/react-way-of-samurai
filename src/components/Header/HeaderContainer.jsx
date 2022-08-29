import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import authApiService from '../../api/auth-api/auth-api-service';
import { setAuthData } from '../../utils/actionCreators';

const mapStateToProps = ({ header, auth }) => {
  return {
    logo: header.logo,
    isAuth: auth.isAuth,
    userId: auth.userId,
    login: auth.login
  };
}

const mapDispatchToProps = { setAuthData };

class HeaderContainer extends React.Component {
  async componentDidMount() {
    return this.setAuthData();
  }

  setAuthData() {
    return authApiService.authMe().then((response) => {
      if (response.error) {
        throw response.error;
      }
      this.props.setAuthData(response.data);
    })
  }

  render() {
    return (
      <Header { ...this.props }/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
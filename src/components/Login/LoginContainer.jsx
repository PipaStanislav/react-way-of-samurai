import React from 'react';
import { login } from '../../redux/thunkCreators/thunkCreators';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Login from './Login';
import styles from './LoginForm/LoginForm.module.css';
import { Navigate } from 'react-router-dom';

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    isAuth: auth.isAuth,
    password: auth.password,
    isRememberMe: auth.isRememberMe,
    userId: auth.userId,

  };
}

const mapDispatchToProps = { login };

class LoginContainer extends React.Component {
  loginFormOnSubmit = (values, { setSubmitting }) => {
    this.props.login(values)
    setSubmitting(false);
  }

  loginFormValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = { message: 'Required', style: styles.notValid };
    }

    if (!values.password) {
      errors.password = { message: 'Required', style: styles.notValid };
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = { message: 'Invalid email address', style: styles.notValid };
    }

    return errors;
  };

  render() {
    return (
      this.props.isAuth
        ?

        <Navigate to={ `/profile/${ this.props.userId }` }/>

        :

        <Login
          { ...this.props }
          loginFormOnSubmit={ this.loginFormOnSubmit }
          loginFormValidation={ this.loginFormValidation }
        />
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)
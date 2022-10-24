import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/thunk-creators/thunk-creators';
import Login from './Login';
import {
  AuthEmailType,
  AuthIsAuthType,
  AuthIsRememberMeType,
  AuthPasswordType,
  AuthUserIdType,
} from '../../redux/auth/auth.types';
import { StateType } from '../../common/types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  email: AuthEmailType,
  password: AuthPasswordType,
  isRememberMe: AuthIsRememberMeType,
  isAuth: AuthIsAuthType,
  userId: AuthUserIdType,
}

type MapDispatchToPropsType = {
  login: (params: ParamsType) => void,
}

type FormType = {
  setSubmitting: (value: boolean) => void
}

type ErrorsType = Partial<{
  email: 'Required' | 'Invalid email address',
  password: 'Required',
}>;


const mapStateToProps = ({ auth }: StateType): MapStateToPropsType => {
  return {
    email: auth.email,
    isAuth: auth.isAuth,
    password: auth.password,
    isRememberMe: auth.isRememberMe,
    userId: auth.userId,
  };
}

const mapDispatchToProps: MapDispatchToPropsType = { login };

class LoginContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
  loginFormOnSubmit = (values: ParamsType, { setSubmitting }: FormType): void => {
    this.props.login(values)
    setSubmitting(false);
  }

  loginFormValidation = (values: ParamsType): ErrorsType => {
    const errors: ErrorsType = {};

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email!)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  render = (): JSX.Element => {
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
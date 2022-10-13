import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

type PropsType = {
  auth: {
    isAuth: boolean,
  }
}

type MappedPropsType = {
  isAuth: boolean,
}

const mapStateToPropsForRedirect = (props: PropsType): MappedPropsType  => ({ isAuth: props.auth.isAuth });

const mapDispatchToPropsForRedirect: object = {};

const withAuthRedirect = (Component: React.ComponentType<MappedPropsType>): React.ComponentType => {
  const AuthRedirectComponent = (props: MappedPropsType) => {
    if (!props.isAuth) {
      return <Navigate to={ '/login' }/>
    }

    return <Component { ...props } />;
  }

  return connect(mapStateToPropsForRedirect, mapDispatchToPropsForRedirect)(AuthRedirectComponent);
}

export default withAuthRedirect;
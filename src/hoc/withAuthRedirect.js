import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (props) => ({ isAuth: props.auth.isAuth });

const mapDispatchToPropsForRedirect = {};

const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={ '/login' }/>
    }

    return <Component { ...props } />;
  }

  return connect(mapStateToPropsForRedirect, mapDispatchToPropsForRedirect)(AuthRedirectComponent);
}

export default withAuthRedirect;
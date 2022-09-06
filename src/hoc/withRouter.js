import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToPropsForRedirect = (props) => ({ isAuth: props.auth.isAuth });

const mapDispatchToPropsForRedirect = {};

const withRouter = Component => {
  const ComponentWithRouterProps = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component { ...props } router={ { location, navigate, params } }/>
    );
  };
  return connect(mapStateToPropsForRedirect, mapDispatchToPropsForRedirect)(ComponentWithRouterProps);
}

export default withRouter;
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (props) => ({});

const mapDispatchToProps = {};

const withRouter = Component => {
  const ComponentWithRouterProps = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component { ...props } router={ { location, navigate, params } }/>
    );
  };
  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouterProps);
}

export default withRouter;
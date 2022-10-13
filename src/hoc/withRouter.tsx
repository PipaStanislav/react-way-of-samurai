import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

type PropsType = object;

type RouterType = { router: { location: object; navigate: object; params: object; } };

const mapStateToProps = (props: PropsType): PropsType => ({...props});

const mapDispatchToProps = {};

const withRouter = (Component: React.ComponentType<PropsType & RouterType>) => {
  const ComponentWithRouterProps = (props: PropsType) => {
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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Location } from 'history';
import { NavigateFunction } from 'react-router/lib/hooks';

type PropsType = object;

export type RouterType = { router: { location: Location; navigate: NavigateFunction; params: { id?: number} } };

const mapStateToProps = (props: PropsType): PropsType => ({ ...props });

const mapDispatchToProps = {};

const withRouter = (Component: React.ComponentType<PropsType & RouterType>): React.ComponentType => {
  const ComponentWithRouterProps = (props: PropsType): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component { ...props } router={ { location, navigate, params } }/>
    );
  };
  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouterProps);
};

export default withRouter;
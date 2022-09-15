import { connect } from 'react-redux';
import React from 'react';
import Preloader from '../components/common/Preloader/Preloader';

const mapStateToProps = ({ preloader }) => ({ preloader });

const mapDispatchToProps = {};

const withReactLazy = Component => {
  const ComponentWithReactLazyProps = (props) => {
    return (
      <React.Suspense fallback={ <Preloader preloader={ props.preloader }/> }>
        <Component { ...props }/>
      </React.Suspense>
    );
  };
  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithReactLazyProps);
}

export default withReactLazy;
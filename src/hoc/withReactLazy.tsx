import { connect } from 'react-redux';
import React from 'react';
import Preloader from '../components/common/Preloader/Preloader';
import { PreloaderStateType } from '../redux/preloader/preloader.types';

type PropsType = {
  preloader: PreloaderStateType
}

const mapStateToProps = ({ preloader }: PropsType): PropsType => ({ preloader });

const mapDispatchToProps = {};

const withReactLazy = (Component: React.ComponentType<PropsType>): React.ComponentType => {
  const ComponentWithReactLazyProps = (props: PropsType) => {
    return (
      <React.Suspense fallback={ <Preloader preloader={ props.preloader }/> }>
        <Component { ...props }/>
      </React.Suspense>
    );
  };
  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithReactLazyProps);
}

export default withReactLazy;
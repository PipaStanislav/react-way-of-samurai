import React from 'react';
import StoreContext from './redux/StoreContext';

const Provider = (props) => {
  return (
    <StoreContext.Provider value={ props.store }>
      { props.children }
    </StoreContext.Provider>
  )
}

export default Provider;
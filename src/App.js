import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppContainer from './AppContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
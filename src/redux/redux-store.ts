import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profile/profile-reducer';
import dialogReducer from './dialog/dialog-reducer';
import sideBarReducer from './side-bar/side-bar-reducer';
import headerReducer from './header/header-reducer';
import usersReducer from './user/user-reducer';
import authReducer from './auth/auth-reducer';
import appReducer from './app/app-reducer';
import preloaderReducer from './preloader/preloader-reducer';
import musicReducer from './music/music-reducer';

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  header: headerReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  sideBar: sideBarReducer,
  preloader: preloaderReducer,
  profilePage: profileReducer,
  messagesPage: dialogReducer,
});

declare global {
  interface Window {
    __store__: any,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './reducers/profileReducer/profileReducer';
import dialogReducer from './reducers/dialogReducer/dialogReducer';
import sideBarReducer from './reducers/sideBarReducer/sideBarReducer';
import headerReducer from './reducers/headerReducer/headerReducer';
import usersReducer from './reducers/userReducer/userReducer';
import authReducer from './reducers/authReducer/authReducer';
import appReducer from './reducers/appReducer/appReducer';
import preloaderReducer from './reducers/preloaderReducer/preloaderReducer';
import musicReducer from './reducers/musicReducer/musicReducer';

const reducers = combineReducers({
  app: appReducer,
  preloader: preloaderReducer,
  auth: authReducer,
  header: headerReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  musicPage: musicReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
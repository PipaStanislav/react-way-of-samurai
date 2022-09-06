import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './reducers/profileReducer/profileReducer';
import dialogReducer from './reducers/dialogReducer/dialogReducer';
import sideBarReducer from './reducers/sideBarReducer/sideBarReducer';
import headerReducer from './reducers/headerReducer/headerReducer';
import usersReducer from './reducers/usersReducer/UsersReducer';
import authReducer from './reducers/authReducer/authReducer';
import appReducer from './reducers/appReducer/appReducer';

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  header: headerReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  messagesPage: dialogReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
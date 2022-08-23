import { combineReducers, createStore } from 'redux';

import profileReducer from './reducers/profileReducer/profileReducer';
import dialogReducer from './reducers/dialogReducer/dialogReducer';
import sideBarReducer from './reducers/sideBarReducer/sideBarReducer';
import headerReducer from './reducers/headerReducer/headerReducer';
import usersReducer from './reducers/usersReducer/UsersReducer';

const reducers = combineReducers({
  header: headerReducer,
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers);



export default store;
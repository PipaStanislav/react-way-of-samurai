import { Route, Routes } from 'react-router-dom';

import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>

      <HeaderContainer/>

      <SideBarContainer/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={ <ProfileContainer/> }>
            <Route path=':id' element={ <ProfileContainer/> }/>
          </Route>

          <Route path='/profile/:id' element={ <ProfileContainer/> }/>

          <Route path='/dialogs/*' element={ <DialogsContainer/> }/>

          <Route path='/news' element={ <News/> }/>

          <Route path='/music' element={ <Music/> }/>

          <Route path='/settings' element={ <Settings/> }/>

          <Route path='/users' element={ <UsersContainer/> }/>

          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;

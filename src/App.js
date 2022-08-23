import { Route, Routes } from 'react-router-dom';

import './App.css';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>

      <HeaderContainer/>

      <SideBarContainer/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={ <Profile/> }/>

          <Route path='/dialogs/*' element={ <DialogsContainer/> }/>

          <Route path='/news' element={ <News/> }/>

          <Route path='/music' element={ <Music/> }/>

          <Route path='/settings' element={ <Settings/> }/>

          <Route path='/users' element={ <UsersContainer/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;

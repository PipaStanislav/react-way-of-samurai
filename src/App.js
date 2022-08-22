import { Route, Routes } from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SideBarContainer from './components/SideBar/SideBarContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>

      <HeaderContainer/>

      <SideBarContainer/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={ <Profile /> }/>

          <Route path='/dialogs/*' element={ <DialogsContainer /> }/>

          <Route path='/news' element={ <News/> }/>

          <Route path='/music' element={ <Music/> }/>

          <Route path='/settings' element={ <Settings/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;

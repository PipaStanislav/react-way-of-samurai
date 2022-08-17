import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className='app-wrapper'>

      <Header state={ props.state.header }/>

      <SideBar state={ props.state.sideBar }/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={ <Profile state={ props.state.profilePage }
                                                    addPost={ props.addPost }
                                                    updateNewPostText={ props.updateNewPostText }/> }/>
          <Route path='/dialogs/*' element={ <Dialogs state={ props.state.messagesPage }/> }/>
          <Route path='/news' element={ <News/> }/>
          <Route path='/music' element={ <Music/> }/>
          <Route path='/settings' element={ <Settings/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import News from './components/News/News';
import MusicContainer from './components/Music/MusicContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initializeApp } from './redux/thunkCreators/thunkCreators';
import withRouter from './hoc/withRouter';
import Preloader from './components/common/Preloader/Preloader';

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
    preloader: state.preloader,
  };
};

const mapDispatchToProps = { initializeApp };

class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp()
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader preloader={ this.props.preloader }/>
    }
    return (
      <div className='app-wrapper'>

        <HeaderContainer/>

        <SideBarContainer/>

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={ <ProfileContainer/> }>
              <Route path=':id' element={ <ProfileContainer/> }/>
            </Route>

            <Route path='/dialogs' element={ <DialogsContainer/> }>
              <Route path=':id' element={ <DialogsContainer/> }/>
            </Route>

            <Route path='/news' element={ <News/> }/>

            <Route path='/music' element={ <MusicContainer/> }/>

            <Route path='/users' element={ <UsersContainer/> }/>

            <Route path='/login' element={ <LoginContainer/> }/>
          </Routes>
        </div>

      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
import React, { ComponentType } from 'react';
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
import { initializeApp } from './redux/thunk-creators/thunk-creators';
import withRouter from './hoc/withRouter';
import Preloader from './components/common/Preloader/Preloader';
import { StateType } from './common/types';
import { InitializedType } from './redux/app/app.types';
import { PreloaderStateType } from './redux/preloader/preloader.types';
import { ParamsType } from './redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  initialized: InitializedType,
  preloader: PreloaderStateType,
}

type MapDispatchToPropsType = {
  initializeApp: (params?: ParamsType) => void,
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    preloader: state.preloader,
});

const mapDispatchToProps: MapDispatchToPropsType = { initializeApp };

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
  componentDidMount = () => {
    this.props.initializeApp()
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader preloader={ this.props.preloader }/>
    }
    return (
      <div className='app-wrapper'>

        <HeaderContainer to={''}/>

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

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

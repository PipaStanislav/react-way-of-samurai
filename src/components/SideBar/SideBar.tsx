import { FC } from 'react';

import styles from './SideBar.module.css';
import NavBar from './NavBar/NavBar';
import FriendsBar from './FriendsBar/FriendsBar';
import { SideBareStateType } from '../../redux/side-bar/side-bar.types';

type PropsType = SideBareStateType

const SideBar: FC<PropsType> = (props): JSX.Element => {
  return (
    <div className={ styles.appSideBar }>
      <NavBar state={ props.navBar }/>
      <FriendsBar state={props.friendsBar}/>
    </div>
  )
}

export default SideBar;
import styles from './SideBar.module.css';
import NavBar from './NavBar/NavBar';
import FriendsBar from './FriendsBar/FriendsBar';


const SideBar = (props) => {
  return (
    <div className={ styles.appSideBar }>
      <NavBar state={ props.navBar }/>
      <FriendsBar state={props.friendsBar}/>
    </div>
  )
}

export default SideBar;
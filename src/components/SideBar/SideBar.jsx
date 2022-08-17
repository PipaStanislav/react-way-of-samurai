import styles from './SideBar.module.css';
import NavBar from './Navbar/NavBar';
import FriendsBar from './FriendsBar/FriendsBar';


const SideBar = (props) => {
  return (
    <div className={ styles.appSideBar }>
      <NavBar state={ props.state.navBar }/>
      <FriendsBar state={props.state.friendsBar}/>
    </div>
  )
}

export default SideBar;
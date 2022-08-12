import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : styles.item }>Profile</NavLink>
      </div>
      <div className={`${styles.item}`}>
        <NavLink to="/dialogs/" className={({ isActive }) => isActive ? styles.active : styles.item }>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? styles.active : styles.item }>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="music" className={({ isActive }) => isActive ? styles.active : styles.item }>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="settings" className={({ isActive }) => isActive ? styles.active : styles.item }>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
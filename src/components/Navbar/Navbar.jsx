import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? style.active : style.item }>Profile</NavLink>
      </div>
      <div className={`${style.item}`}>
        <NavLink to="/dialogs/" className={({ isActive }) => isActive ? style.active : style.item }>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? style.active : style.item }>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="music" className={({ isActive }) => isActive ? style.active : style.item }>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="settings" className={({ isActive }) => isActive ? style.active : style.item }>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
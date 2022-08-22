import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to={props.logo.to}>
        <img src={props.logo.src} alt={props.logo.title}/>
      </NavLink>
    </header>
  )
}

export default Header;
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to={props.state.logo.to}>
        <img src={props.state.logo.src} alt={props.state.logo.title}/>
      </NavLink>
    </header>
  )
}

export default Header;
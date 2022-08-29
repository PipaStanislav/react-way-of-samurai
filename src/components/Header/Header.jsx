import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={ styles.header }>
      <NavLink to={ props.logo.to }>
        <img src={ props.logo.src } alt={ props.logo.title }/>
      </NavLink>

      <div className={ styles.loginBlock }>
        {
          props.isAuth
            ? <NavLink to={ `/profile/${ props.userId }` }> { props.login } </NavLink>
            : <NavLink to={ '/login' }> login </NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
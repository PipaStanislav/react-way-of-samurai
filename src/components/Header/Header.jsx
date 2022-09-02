import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const profile = (props) => {
    return (
      <div>
        <NavLink to={ `/profile/${ props.userId }` }> { props.login } </NavLink>
      </div>
    );
  }

  return (
    <header className={ styles.header }>
      <NavLink to={ props.logo.to }>
        <img src={ props.logo.src } alt={ props.logo.title }/>
      </NavLink>

      <div className={ styles.loginBlock }>
        { props.isAuth ? profile(props) : <NavLink to={ '/login' }> login </NavLink> }
      </div>
    </header>
  )
}

export default Header;
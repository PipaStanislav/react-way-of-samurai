import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const navBarElements = props.state.map(({ id, to, title, hasPadding }) => {
    return (
      <div key={ id } className={ `${ styles.item } ${ hasPadding ? styles.itemWithPadding : '' }` }>
        <NavLink to={ `/${ to }` }
                 className={ ({ isActive }) => isActive ? styles.active : styles.item }>
          { title }
        </NavLink>
      </div>
    )
  })

  return (
    <nav className={ styles.nav }>
      { navBarElements }
    </nav>
  )
}

export default NavBar;
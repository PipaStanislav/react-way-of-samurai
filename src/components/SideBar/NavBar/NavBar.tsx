import { NavLink } from 'react-router-dom';
import { FC } from 'react';

import styles from './NavBar.module.css';
import { NavBarType } from '../../../redux/side-bar/side-bar.types';

type PropsType = {
  state: NavBarType,
}

const NavBar: FC<PropsType> = (props): JSX.Element => {
  const navBarElements: Array<JSX.Element> = props.state.map(({ id, to, title, hasPadding }) => {
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
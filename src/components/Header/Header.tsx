import styles from './Header.module.css';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FC } from 'react';
import { UserIdType } from '../../redux/user/user.types';
import { LogoType } from '../../redux/header/header.types';
import { AuthIsAuthType, AuthLoginType } from '../../redux/auth/auth.types';
import { LogOutType } from '../../redux/action-creators/action-creators.types';

interface Props extends NavLinkProps {
  userId: UserIdType,
  login: AuthLoginType,
  logOut: () => LogOutType,
  logo: LogoType,
  isAuth: AuthIsAuthType,
}

const Profile: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className={ styles.loginElement }>
        <NavLink to={ `/profile/${ props.userId }` }> { props.login } </NavLink>
        <NavLink to={ '/login' } onClick={ props.logOut }> Logout </NavLink>
      </div>
    </>
  );
};


const Header: FC<Props> = (props): JSX.Element => {
  return (
    <header className={ styles.header }>
      <NavLink to={ props.logo.to }>
        <img src={ props.logo.src } alt={ props.logo.title }/>
      </NavLink>

      <div className={ styles.loginBlock }>
        { props.isAuth ? Profile(props) : <NavLink to={ '/login' }> login </NavLink> }
      </div>
    </header>
  );
};

export default Header;
import styles from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import { FC } from 'react';
import { AuthEmailType, AuthIsRememberMeType, AuthPasswordType } from '../../redux/auth/auth.types';

export type PropsType = {
  email: AuthEmailType,
  password: AuthPasswordType,
  isRememberMe: AuthIsRememberMeType,
  loginFormValidation: any,
  loginFormOnSubmit: any,
}

const Login: FC<PropsType> = (props): JSX.Element => {
  return (
    <div className={ styles.login }>
      <h1>Login</h1>
      <LoginForm { ...props }/>
    </div>
  );
}

export default Login;
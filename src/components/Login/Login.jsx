import styles from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = props => {
  return (
    <div className={ styles.login }>
      <h1>Login</h1>
      <LoginForm { ...props }/>
    </div>
  );
}

export default Login;
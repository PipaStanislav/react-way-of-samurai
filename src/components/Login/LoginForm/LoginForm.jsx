import styles from './LoginForm.module.css';
import { Field, Formik } from 'formik';

const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <div className={ styles.loginFormElement }>
        <Field
          className={ errors.email && touched.email && errors.email.style }
          placeholder={ 'Email' }
          type={ "email" }
          name={ "email" }
          onChange={ handleChange }
          onBlur={ handleBlur }
          value={ values.email }
        />
      </div>

      <div className={ styles.loginFormElement }>
        <Field
          className={ errors.password && touched.password && errors.password.style }
          placeholder={ 'Password' }
          type={ "password" }
          name={ "password" }
          onChange={ handleChange }
          onBlur={ handleBlur }
          value={ values.password }
        />
      </div>

      <div className={ styles.loginFormElement }>
        <Field type="checkbox" name="isRememberMe"/>
        remember Me
      </div>

      <button type="submit" disabled={ isSubmitting }>
        Submit
      </button>
    </form>
  )
}


const LoginForm = props => {
  const loginFormInitialValues = {
    email: props.email || '',
    password: props.password || '',
    isRememberMe: props.isRememberMe,
  };

  return (
    <Formik initialValues={ loginFormInitialValues } validate={ props.loginFormValidation } onSubmit={ props.loginFormOnSubmit }>
      { Form }
    </Formik>
  );
}

export default LoginForm;
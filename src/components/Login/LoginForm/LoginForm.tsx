import { FC } from 'react';
import { Field, Formik } from 'formik';
import { FormikProps } from 'formik/dist/types';

import styles from './LoginForm.module.css';
import { PropsType } from '../Login';

type ValueType = {
  email: string,
  password: string,
  isRememberMe: boolean,
}

const Form: FC<FormikProps<ValueType>> = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }): JSX.Element => {
  return (
    <form onSubmit={ handleSubmit }>
      <div className={ styles.loginFormElement }>
        <Field
          className={ errors.email && touched.email && styles.notValid }
          placeholder={ 'Email' }
          type={ "email" }
          name={ "email" }
          onChange={ handleChange }
          onBlur={ handleBlur }
          value={ values.email! }
        />
      </div>

      <div className={ styles.loginFormElement }>
        <Field
          className={ errors.password && touched.password && styles.notValid }
          placeholder={ 'Password' }
          type={ "password" }
          name={ "password" }
          onChange={ handleChange }
          onBlur={ handleBlur }
          value={ values.password! }
        />
      </div>

      <div className={ styles.loginFormElement }>
        <Field type={ "checkbox" } name={ "isRememberMe" }/>
        remember Me
      </div>

      <button type="submit" disabled={ isSubmitting }>
        Submit
      </button>
    </form>
  )
}


const LoginForm: FC<PropsType> = (props): JSX.Element => {
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
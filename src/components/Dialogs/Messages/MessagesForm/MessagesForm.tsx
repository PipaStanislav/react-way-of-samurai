import { FC } from 'react';
import { FormikProps } from 'formik/dist/types';

import styles from './MessagesForm.module.css';
import { Field, Formik } from 'formik';
import { FormType, ValuesType } from '../Messages';

type PropsType = {
  onSendMessage: (value: ValuesType, form: FormType) => void,
};

const Form = ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }: FormikProps<ValuesType>): JSX.Element => {
  return (
    <form onSubmit={ handleSubmit }>
      <div className={ styles.formElement }>
        <Field
          type={ "text" }
          name={ "message" }
          as={ "textarea" }
          value={ values.message }
          onChange={ handleChange }
          onBlur={ handleBlur }
        />
      </div>

      <div className={ styles.formElement }>
        <button type={ "submit" } disabled={ isSubmitting }>
          Submit
        </button>
      </div>
    </form>
  );
}

const MessagesForm: FC<PropsType> = (props): JSX.Element => {
  return (
    <Formik initialValues={ { message: '' } } onSubmit={ props.onSendMessage }>
      { Form }
    </Formik>
  );
}

export default MessagesForm;
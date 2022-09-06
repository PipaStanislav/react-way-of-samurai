import styles from './MessagesForm.module.css';
import { Field, Formik } from 'formik';

const Form = ({ values, handleChange, handleBlur, handleSubmit, isSubmitting, onPostChange }) => {
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

const MessagesForm = props => {
  return (
    <Formik initialValues={ { message: '' } } onSubmit={ props.onSendMessage }>
      { Form }
    </Formik>
  );
}

export default MessagesForm;
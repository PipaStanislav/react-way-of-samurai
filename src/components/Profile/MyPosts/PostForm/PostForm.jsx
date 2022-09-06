import { Field, Formik } from 'formik';

import styles from './PostForm.module.css';

const Form = ({ values, handleChange, handleBlur, handleSubmit, isSubmitting, onPostChange }) => {
  return (
    <form onSubmit={ handleSubmit } className={ styles.postForm }>
      <div className={ styles.formElement }>
        <Field type={ "text" }
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

const PostForm = (props) => {
  const initialValues = { message: props.newPostText };

  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onAddPost }>
      { Form }
    </Formik>
  )
}

export default PostForm;
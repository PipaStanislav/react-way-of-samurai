import { Field, Formik } from 'formik';
import { FC } from 'react';
import { FormikProps } from 'formik/dist/types';

import styles from './PostForm.module.css';
import { newPostTextType } from '../../../../redux/profile/profile.types';
import { ValuesType } from '../MyPosts';
import { UserIdType } from '../../../../redux/user/user.types';

type FormType = {
  resetForm: () => void,
}

type PropsType = {
  newPostText: newPostTextType,
  onAddPost: (params: ValuesType, { resetForm }: FormType) => any,
}



const Form: FC<FormikProps<ValuesType>> = ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }): JSX.Element => {
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

const PostForm: FC<PropsType> = (props): JSX.Element => {
  const initialValues: ValuesType = { message: props.newPostText };

  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onAddPost }>
      { Form }
    </Formik>
  )
}

export default PostForm;
import styles from './ProfileStatus.module.css';
import { useEffect, useState } from 'react';

const setProfileInState = ({ props, setIsEditable }) => () => {
  if (props.auth.userId === props.profileUserId) {
    return setIsEditable(true);
  }

  return setIsEditable(false);
}

const updateStateAfterChangesProfile = ({ props, setIsEditable, setStatus }) => () => {
  if (props.auth.userId === props.profileUserId) {
      setIsEditable(true);
      setStatus(props.status)
  }

  if (props.auth.userId !== props.profileUserId) {
      setIsEditable(false);
      setStatus(props.status)
  }
}

const ProfileStatus = props => {
  const [editeMode, setEditMode] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(setProfileInState({ props, setIsEditable }));
  useEffect(updateStateAfterChangesProfile({ props, setIsEditable, setStatus}), [props.status]);

  const changeStatusEditMode = () => {
    if (isEditable) {
      setEditMode(!editeMode);

      if (editeMode) {
        return props.updateProfile({ id: props.auth.userId, status });
      }
    }
  }

  const onChangeProfileStatus = (event) => {
    return setStatus(event.currentTarget.value);
  }

  return (
    <div className={ styles.status }>
      <span>Status:</span>
      {
        editeMode && isEditable
          ?
          <div className={ styles.statusElement }>
            <input autoFocus={ true } onBlur={ changeStatusEditMode } onChange={ onChangeProfileStatus }
                   value={ status }/>
          </div>
          :
          <div className={ styles.statusElement }>
            <span onDoubleClick={ changeStatusEditMode }>{ props.status || '---' }</span>
          </div>
      }
    </div>
  );
}


export default ProfileStatus;
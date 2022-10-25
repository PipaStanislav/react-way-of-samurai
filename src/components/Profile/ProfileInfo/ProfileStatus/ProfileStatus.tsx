import { FC, useEffect, useState, Dispatch } from 'react';

import styles from './ProfileStatus.module.css';
import { ProfileStatusType } from '../../../../redux/profile/profile.types';
import { AuthStateType } from '../../../../redux/auth/auth.types';
import { ParamsType } from '../../../../redux/thunk-creators/thunk-creators.types';
import { UserIdType } from '../../../../redux/user/user.types';

type PropsType = {
  status: ProfileStatusType,
  auth: AuthStateType,
  updateProfile: (params: ParamsType) => void,
  profileUserId: UserIdType,
}

type OnChangeProfileStatusEventType = {
  currentTarget: {
    value: string,
  }
}

type SetProfileInStateParamsType = {
  props: PropsType,
  setIsEditable: Dispatch<boolean>,
}

type updateStateAfterChangesProfileParamsType = SetProfileInStateParamsType & {
  setStatus: Dispatch<string>,
}

const setProfileInState = ({ props, setIsEditable }: SetProfileInStateParamsType) => () => {
  if (props.auth.userId === props.profileUserId) {
    return setIsEditable(true);
  }

  return setIsEditable(false);
}

const updateStateAfterChangesProfile = ({ props, setIsEditable, setStatus }: updateStateAfterChangesProfileParamsType) => () => {
  if (props.auth.userId === props.profileUserId) {
      setIsEditable(true);
      setStatus(props.status)
  }

  if (props.auth.userId !== props.profileUserId) {
      setIsEditable(false);
      setStatus(props.status)
  }
}

const ProfileStatus: FC<PropsType> = (props): JSX.Element => {
  const [editeMode, setEditMode] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(props.status);

  useEffect(setProfileInState({ props, setIsEditable }));
  useEffect(updateStateAfterChangesProfile({ props, setIsEditable, setStatus}), [props.status]);

  const changeStatusEditMode = (): void => {
    if (isEditable) {
      setEditMode(!editeMode);

      if (editeMode) {
        return props.updateProfile({ id: props.auth.userId!, status });
      }
    }
  }

  const onChangeProfileStatus = (event: OnChangeProfileStatusEventType): void => {
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
import React, { FC } from 'react';

import styles from './Message.module.css';
import { UserIdType } from '../../../../redux/user/user.types';
import { MessageType } from '../../../../redux/dialog/dialog.types';
import { IdType } from '../../../../common/types';

type PropsType = {
  id: IdType,
  authUserId: UserIdType,
  message: MessageType
}

const Message: FC<PropsType> = (props): JSX.Element => {
  const myMessage: string = props.authUserId === props.message.userId ? styles.myMessage : '';

  return (
    <div className={ myMessage }>
      <div className={ styles.message }>{ props.message.text }</div>
    </div>
  )
}

export default Message;
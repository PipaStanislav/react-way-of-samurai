import { FC } from 'react';

import styles from './Messages.module.css';
import Message from './Message/Message';
import MessagesForm from './MessagesForm/MessagesForm';
import { DialogType } from '../../../redux/dialog/dialog.types';
import { UserIdType } from '../../../redux/user/user.types';
import { IdType } from '../../../common/types';

export type ValuesType = {
  message: string
};

export type FormType = {
  resetForm: () => void;
}

type SendDialogMessageType = {
  id: IdType,
  organizerId: IdType,
  participantId: IdType,
  userId: UserIdType,
  message: string,
}

type PropsType = {
  dialog: DialogType,
  authUserId: UserIdType,
  sendDialogMessage: ( message: SendDialogMessageType) => void,
}

const Messages: FC<PropsType> = (props): JSX.Element => {
  if (!props.dialog) {
    return <></>;
  }

  const messagesElements = props.dialog.messages.map(message => {
    return (
      <Message id={ message.id } key={ message.id } message={ message } authUserId={ props.authUserId }/>
    )
  });

  const onSendMessage = (value: ValuesType, { resetForm }: FormType) => {
    resetForm();

    props.sendDialogMessage({
      id: props.dialog.id,
      organizerId: props.dialog.organizerId,
      participantId: props.dialog.participantId,
      userId: props.authUserId,
      message: value.message,
    });
  }

  return (
    <div className={ styles.messagesField }>
      <div className={ styles.messages }>
        { messagesElements }
      </div>

      <MessagesForm onSendMessage={ onSendMessage }/>
    </div>
  )
}

export default Messages;
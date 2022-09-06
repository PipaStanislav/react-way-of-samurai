import styles from './Messages.module.css';
import Message from './Message/Message';
import MessagesForm from './MessagesForm/MessagesForm';

const Messages = (props) => {
  const messagesElements = props.dialog.messages.map(message => {
    return (
      <Message id={ message.id } key={ message.id } message={ message } authUserId={ props.authUserId }/>
    )
  });

  const onSendMessage = (value, { resetForm }) => {
    resetForm()
    return props.sendDialogMessage({
      id: props.dialog.id,
      organizerId: props.dialog.organizerId,
      participantId: props.dialog.participantId,
      userId: props.authUserId,
      message: value.message
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
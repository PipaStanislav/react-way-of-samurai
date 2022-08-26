import styles from './Messages.module.css';
import Message from './Message/Message';
import { updateNewMessage } from '../../../utils/actionCreators';

const Messages = (props) => {
  const { messages, sendMessage, newMessageText, updateNewMessage } = props;

  const messagesElements = messages.map(({ id, message }) => {
    return (
      <Message id={ id } key={ id } message={ message }/>
    )
  });

  const onSendMessage = () => {
    return sendMessage();
  }

  const onChangeNewMessage = (event) => {
    return updateNewMessage(event.currentTarget.value);
  }

  return (
    <div className={ styles.messagesField }>
      <div className={ styles.messages }>
        { messagesElements }
      </div>

      <div className={ styles.newMessage }>
        <div>
          <textarea onChange={ onChangeNewMessage } value={ newMessageText }></textarea>
        </div>

        <div>
          <button onClick={ onSendMessage }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;
import styles from './Messages.module.css';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../utils/actionCreators';

const Messages = (props) => {
  const messagesElements = props.state.map(({ id, message }) => {
    return (
      <Message id={ id } key={ id } message={ message }/>
    )
  });

  const sendMessage = () => {
    return props.dispatch(sendMessageActionCreator());
  }

  const onChangeNewMessage = (event) => {
    return props.dispatch(updateNewMessageActionCreator(event.currentTarget.value));
  }

  return (
    <div className={ styles.messagesField }>
      <div className={ styles.messages }>
        { messagesElements }
      </div>

      <div className={ styles.newMessage }>
        <div>
          <textarea onChange={ onChangeNewMessage } value={ props.newMessageText }></textarea>
        </div>

        <div>
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;
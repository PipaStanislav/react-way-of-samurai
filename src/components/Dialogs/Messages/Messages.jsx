import styles from './Messages.module.css';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../utils/actionCreator';

const Messages = (props) => {
  const messagesElements = props.state.map(({ id, message }) => {
    return (
      <Message id={ id } key={ id } message={ message }/>
    )
  });

  const addMessage = () => {
    return props.dispatch(addMessageActionCreator());
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
          <button onClick={ addMessage }>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;
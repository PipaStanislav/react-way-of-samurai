import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';

const Dialogs = (props) => {
  const newMessage = useRef();

  const dialogElements = props.state.dialogs.map(({ id, name, avatar }) => {
      return (
        <DialogItem id={ id } key={ id } name={ name } avatar={ avatar }/>
      )
    }
  );

  const messagesElements = props.state.messages.map(({ id, message }) => {
    return (
      <Message id={ id } key={ id } message={ message }/>
    )
  });

  const addMessage = () => {
    const text = newMessage.current.value;
    return alert(text);
  }

  return (
    <div className={ styles.dialogs }>
      <div className={ styles.dialogsItems }>
        { dialogElements }
      </div>

      <div className={ styles.messages }>
        { messagesElements }
        <div>
          <textarea ref={newMessage} ></textarea>
        </div>

        <div>
          <button onClick={ addMessage }> Send </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
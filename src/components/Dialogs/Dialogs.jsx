import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Tome' },
    { id: 3, name: 'Jone' },
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Hello' }
  ];

  const dialogElements = dialogs.map(({ id, name }) => <DialogItem id={ id } name={ name }/>)

  const messagesElements = messages.map(({ id, message }) => <Message id={ id } message={ message }/>)

  return (
    <div className={ styles.dialogs }>
      <div className={ styles.dialogsItems }>
        { dialogElements }
      </div>

      <div className={ styles.messages }>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map(({ id, name }) => <DialogItem id={ id } key={id} name={ name }/>)
  const messagesElements = props.messages.map(({ id, message }) => <Message id={ id } key={id} message={ message }/>)

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
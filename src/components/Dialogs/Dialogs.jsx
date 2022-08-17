import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
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
import styles from './Message.module.css';

const Message = (props) => {
  const myMessage = props.authUserId === props.message.userId ? styles.myMessage : '';
  return (
    <div className={ myMessage }>
      <div className={ styles.message }>{ props.message.text }</div>
    </div>
  )
}

export default Message;
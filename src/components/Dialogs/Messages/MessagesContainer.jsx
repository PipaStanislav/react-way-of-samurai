import Messages from './Messages';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../utils/actionCreators';

const MessagesContainer = (props) => {
  const { messagesPage } = props.store.getState();

  const sendMessage = () => {
    return props.store.dispatch(sendMessageActionCreator());
  }

  const changeNewMessage = (text) => {
    return props.store.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <Messages messages={ messagesPage.messages }
             newMessageText={ messagesPage.newMessageText }
             sendMessage={ sendMessage }
             changeNewMessage={ changeNewMessage }/>
  )
}

export default MessagesContainer;
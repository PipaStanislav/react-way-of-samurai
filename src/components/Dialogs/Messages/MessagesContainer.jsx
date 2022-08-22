import Messages from './Messages';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../utils/actionCreators';
import StoreContext from '../../../redux/StoreContext';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { messagesPage } = store.getState();

          const sendMessage = () => {
            return store.dispatch(sendMessageActionCreator());
          }

          const changeNewMessage = (text) => {
            return store.dispatch(updateNewMessageActionCreator(text));
          }

          return (
            <Messages messages={ messagesPage.messages }
                      newMessageText={ messagesPage.newMessageText }
                      sendMessage={ sendMessage }
                      changeNewMessage={ changeNewMessage }/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MessagesContainer;
import Messages from './Messages';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../utils/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = ({ messagesPage }) => {
  return {
    messages: messagesPage.messages,
    newMessageText: messagesPage.newMessageText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      return dispatch(sendMessageActionCreator());
    },

    changeNewMessage: (text) => {
      return dispatch(updateNewMessageActionCreator(text));
    },
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const MessagesContainer = connector(Messages);

export default MessagesContainer;
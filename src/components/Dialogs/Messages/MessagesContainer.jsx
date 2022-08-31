import Messages from './Messages';
import { sendMessage, updateNewMessage } from '../../../redux/actionCreators/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = ({ messagesPage }) => {
  return {
    messages: messagesPage.messages,
    newMessageText: messagesPage.newMessageText,
  };
};

const mapDispatchToProps = { sendMessage, updateNewMessage }

const connector = connect(mapStateToProps, mapDispatchToProps);
const MessagesContainer = connector(Messages);

export default MessagesContainer;
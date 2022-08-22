import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = ({ messagesPage }) => {
  return {
    dialogs: messagesPage.dialogs,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const DialogsContainer = connector(Dialogs)

export default DialogsContainer;
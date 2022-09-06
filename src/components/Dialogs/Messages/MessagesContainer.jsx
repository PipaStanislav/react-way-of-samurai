import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Messages from './Messages';
import { getDialog, sendDialogMessage } from '../../../redux/thunkCreators/thunkCreators';
import withRouter from '../../../hoc/withRouter';

const mapStateToProps = ({ messagesPage, auth }) => {
  return {
    dialog: messagesPage.dialog,
    authUserId: auth.userId,
  };
};

const mapDispatchToProps = { sendDialogMessage, getDialog }

class MessagesContainer extends React.Component {
  componentDidUpdate = (prevProps) => {
    if (prevProps.router.params.id !== this.props.router.params.id) {
      this.props.getDialog({ id: this.props.router.params.id, userId: this.props.authUserId })
    }
  }

  render() {
    return (
      <>{ this.props.dialog && <Messages { ...this.props }/> }</>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer);
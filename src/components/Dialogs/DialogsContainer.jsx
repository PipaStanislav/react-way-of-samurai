import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';


import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getDialogs } from '../../redux/thunkCreators/thunkCreators';
import withRouter from '../../hoc/withRouter';

const mapStateToProps = ({ messagesPage, auth }) => {
  return {
    dialogs: messagesPage.dialogs,
    authUserId: auth.userId,
  };
};

const mapDispatchToProps = { getDialogs };

class DialogsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getDialogs({ userId: this.props.authUserId });
  }

  render() {
    return (
      <Dialogs { ...this.props } />
    )
  }
}


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);
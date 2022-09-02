import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';


import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = ({ messagesPage }) => {
  return {
    dialogs: messagesPage.dialogs,
  };
};

const mapDispatchToProps = {};

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs { ...this.props } />
    )
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(DialogsContainer);
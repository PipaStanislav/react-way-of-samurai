import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getDialogs } from '../../redux/thunk-creators/thunk-creators';
import withRouter from '../../hoc/withRouter';
import withReactLazy from '../../hoc/withReactLazy';

const Dialogs = React.lazy(() => import('./Dialogs'));

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
  withReactLazy,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);
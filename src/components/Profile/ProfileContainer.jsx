import { connect } from 'react-redux';

import React from 'react';
import Profile from './Profile';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (props) => ({});

const mapDispatchToProps = {};

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile/>
    )
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(ProfileContainer);
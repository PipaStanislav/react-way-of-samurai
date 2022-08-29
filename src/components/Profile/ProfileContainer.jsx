import { connect } from 'react-redux';

import React from 'react';
import Profile from './Profile';

const mapStateToProps = (props) => {
  return {};
};

const mapDispatchToProps = {};

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
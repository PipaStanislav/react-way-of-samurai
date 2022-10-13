import React from 'react';
import { connect } from 'react-redux';

import SideBar from './SideBar';
import { getFriends } from '../../redux/thunk-creators/thunk-creators';
import getStateToProps from '../../redux/side-bar/side-bar-selector';

const mapStateToProps = state => {
  return getStateToProps(state);
}

const mapDispatchToProps = { getFriends };

class SideBarContainer extends React.Component {
  componentDidMount() {
    this.props.getFriends({ offset: this.props.friendsBar.offset, limit: this.props.friendsBar.limit })
  }

  render() {
    return (
      <SideBar { ...this.props }/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
import React from 'react';
import { connect } from 'react-redux';

import SideBar from './SideBar';
import { getFriends } from '../../redux/thunk-creators/thunk-creators';
import getStateToProps from '../../redux/side-bar/side-bar-selector';
import { StateType } from '../../common/types';
import { SideBareStateType } from '../../redux/side-bar/side-bar.types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = SideBareStateType;

type MapDispatchToPropsType = {
  getFriends: (params: ParamsType) => void,
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return getStateToProps(state);
}

const mapDispatchToProps: MapDispatchToPropsType = { getFriends };

class SideBarContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
  componentDidMount = (): void => {
    this.props.getFriends({ offset: this.props.friendsBar.offset, limit: this.props.friendsBar.limit })
  }

  render = (): JSX.Element => {
    return (
      <SideBar { ...this.props }/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
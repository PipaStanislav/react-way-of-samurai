import React, { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ProfileInfo from './ProfileInfo';
import withRouter, { RouterType } from '../../../hoc/withRouter';
import { updateProfile } from '../../../redux/thunk-creators/thunk-creators';
import { StateType } from '../../../common/types';
import { AuthStateType } from '../../../redux/auth/auth.types';
import { ProfileType } from '../../../redux/profile/profile.types';
import { PreloaderStateType } from '../../../redux/preloader/preloader.types';
import { ParamsType } from '../../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  auth: AuthStateType,
  profile: ProfileType,
  preloader: PreloaderStateType,
}

type MapDispatchToPropsType = {
  updateProfile: (params: ParamsType) => void,
}

const mapStateToProps = ({ profilePage, auth, preloader }: StateType): MapStateToPropsType => {
  return {
    auth,
    profile: profilePage.profile!,
    preloader,
  };
};

const mapDispatchToProps: MapDispatchToPropsType = { updateProfile };

class ProfileInfoContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouterType> {
  render = (): JSX.Element => {
    return (
      <ProfileInfo { ...this.props }/>
    );
  }
}

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileInfoContainer)
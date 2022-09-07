import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'redux';
import ProfileInfo from './ProfileInfo';
import withRouter from '../../../hoc/withRouter';
import { updateProfile } from '../../../redux/thunkCreators/thunkCreators';

const mapStateToProps = ({ profilePage, auth }) => {
  return {
    auth,
    profile: profilePage.profile,
    preloader: profilePage.preloader,
  };
};

const mapDispatchToProps = { updateProfile };

class ProfileInfoContainer extends React.Component {
  render = () => {
    return (
      <ProfileInfo { ...this.props }/>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileInfoContainer)
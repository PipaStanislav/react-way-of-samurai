import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ProfileInfo from './ProfileInfo';
import withRouter from '../../../hoc/withRouter';
import { updateProfile } from '../../../redux/thunkCreators/thunkCreators';

const mapStateToProps = ({ profilePage, auth, preloader }) => {
  return {
    auth,
    profile: profilePage.profile,
    preloader,
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
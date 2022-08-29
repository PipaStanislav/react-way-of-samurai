import React from 'react';

import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';
import profileApiService from '../../../api/profile-api/profile-api-service';
import { setProfile } from '../../../utils/actionCreators';

const mapStateToProps = ({ profilePage }) => {
  return {
    info: profilePage.info,
    profile: profilePage.profile,
    preloader: profilePage.preloader,
  };
};

const mapDispatchToProps = { setProfile };

class ProfileInfoContainer extends React.Component {
  async componentDidMount() {
    return this.setProfile()
  }

  setProfile = () => {
    return profileApiService.getProfile({ id: 2 }).then((response) => {
      this.props.setProfile(response);
    })
  }

  render() {
    return (
      <ProfileInfo { ...this.props }/>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);
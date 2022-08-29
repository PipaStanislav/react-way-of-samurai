import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
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

const withRouter = Component => {
  const ComponentWithRouterProps = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component { ...props } router={ { location, navigate, params } }/>
    );
  };

  return ComponentWithRouterProps;
}

class ProfileInfoContainer extends React.Component {
  async componentDidMount() {
    return this.setProfile(this.props.router.params.id);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevId = prevProps.router.params.id;
    const currId = this.props.router.params.id;

    if (prevId && !currId || prevId !== currId) {
      return this.setProfile();
    }
  }

  setProfile = (id = 1) => {
    return profileApiService.getProfile({ id }).then((response) => {
      this.props.setProfile(response);
    })
  }

  render() {
    return (
      <ProfileInfo { ...this.props }/>
    );
  }
}

const withRouterProfileInfoContainer = withRouter(ProfileInfoContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileInfoContainer);
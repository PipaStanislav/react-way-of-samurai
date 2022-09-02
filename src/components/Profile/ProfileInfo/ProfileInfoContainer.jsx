import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import { getProfile, updateProfile } from '../../../redux/thunkCreators/thunkCreators';
import { compose } from 'redux';

const mapStateToProps = ({ profilePage, auth }) => {
  return {
    auth,
    profile: profilePage.profile,
    preloader: profilePage.preloader,
  };
};

const mapDispatchToProps = { getProfile, updateProfile };

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
  componentDidMount = () => {
    const profileId = this.props.router.params.id || this.props.auth.userId || 1;

    return this.setProfile(profileId);
  }
  
  componentDidUpdate = (prevProps) => {
    const prevId = prevProps.router.params.id;
    const currId = this.props.router.params.id;

    if (prevId && !currId || prevId !== currId) {
      return this.setProfile(this.props.auth.userId);
    }
  }

  setProfile = (id) => this.props.getProfile({ id });

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
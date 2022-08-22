import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';

const mapStateToProps = ({ profilePage }) => {
  return {
    info: profilePage.info,
  };
}

const mapDispatchToProps = () => {
  return {};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const ProfileInfoContainer = connector(ProfileInfo);

export default ProfileInfoContainer;
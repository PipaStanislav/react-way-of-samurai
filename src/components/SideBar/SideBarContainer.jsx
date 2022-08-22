import { connect } from 'react-redux';
import SideBar from './SideBar';

const mapStateToProps = ({ sideBar }) => {
  return {
    navBar: sideBar.navBar,
    friendsBar: sideBar.friendsBar,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const SideBarContainer = connector(SideBar);

export default SideBarContainer;
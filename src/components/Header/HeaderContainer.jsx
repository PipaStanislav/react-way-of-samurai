import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = ({ header }) => {
  return {
    logo: header.logo
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const HeaderContainer = connector(Header);

export default HeaderContainer;
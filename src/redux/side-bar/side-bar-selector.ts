import { StateType } from '../../common/types';
import { FriendsBarType, NavBarType, SideBareStateType } from './side-bar.types';

export const getNavBar = (state: StateType): NavBarType => state.sideBar.navBar;

export const getFriendsBar = (state: StateType): FriendsBarType => state.sideBar.friendsBar;

export const getSideBarStateToProps = (state: StateType): SideBareStateType => {
  return {
    navBar: getNavBar(state),
    friendsBar: getFriendsBar(state),
  };
}

const getStateToProps = (state: StateType): SideBareStateType => getSideBarStateToProps(state);

export default getStateToProps;
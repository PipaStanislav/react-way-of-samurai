export const getNavBar = state => {
  return state.sideBar.navBar;
};

export const getFriendsBar = state => {
  return state.sideBar.friendsBar;
};

export const getSideBarStateToProps = state => {
  return {
    navBar: getNavBar(state),
    friendsBar: getFriendsBar(state),
  };
}

const getStateToProps = state => {
  return getSideBarStateToProps(state);
}

export default getStateToProps;
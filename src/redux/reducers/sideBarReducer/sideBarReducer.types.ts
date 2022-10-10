export type NavBarElementType = {
  id: number,
  to: string,
  title: string,
  hasPadding: boolean,
};

export type NavBarType = Array<NavBarElementType>;

export type FriendType = object;

export type FriendsType = Array<FriendType>;

export type FriendsBarType = {
  title: string,
  offset: number,
  limit: number,
  friends: FriendsType,
};


export type SideBareStateType = {
  navBar: NavBarType,
  friendsBar: FriendsBarType,
};

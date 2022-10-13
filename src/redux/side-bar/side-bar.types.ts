import { LimitType, OffsetType } from '../../common/types';

export type NavBarElementType = {
  id: number,
  to: string,
  title: string,
  hasPadding: boolean,
};

export type NavBarType = Array<NavBarElementType>;

export type FriendType = object;

export type FriendsType = Array<FriendType>;

export type TitleType = string;

export type FriendsBarType = {
  title: TitleType,
  offset: OffsetType,
  limit: LimitType,
  friends: FriendsType,
};


export type SideBareStateType = {
  navBar: NavBarType,
  friendsBar: FriendsBarType,
};

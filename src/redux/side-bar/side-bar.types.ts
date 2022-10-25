import { IdType, LimitType, OffsetType } from '../../common/types';
import { AvatarType } from '../user/user.types';

export type NavBarElementType = {
  id: number,
  to: string,
  title: string,
  hasPadding: boolean,
};

export type NavBarType = Array<NavBarElementType>;

export type FriendType = {
  id: IdType,
  firstName: string,
  avatar: AvatarType,
};

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

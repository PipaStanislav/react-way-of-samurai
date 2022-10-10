import initialStore from './userInitialStore';
import DISPATCH_CONSTANTS from '../../../constants/dispatch/dispatch-constants'
import USER_CONSTANTS from '../../../components/Users/constants/userConstants';

export type AvatarImageType = {
  src: string,
  title: string
};

export type AvatarType = {
  small: AvatarImageType,
  large: AvatarImageType,
};

export type AddressType = {
  country: string,
  city: string
}

export type UserType = {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string
  status: string,
  isFollow: boolean,
  avatar: AvatarType,
  address: AddressType,
}

export type UsersType = Array<UserType>;

export type FollowingUnfollowingInProgress = Array<number>;

export type isFollowingUnfollowingInProgress = boolean;

export type DefaultDataType = {
  avatar: AvatarImageType
}

export type UserIdType = number;

export type ActivePageType = number;

export type DataType = {
  userId: UserIdType,
  isFollowingUnfollowingInProgress: boolean,
}

export type UsersStateType = {
  offset: number,
  limit: number,
  count: number,
  totalCount: number,
  users: UsersType,
  activePage: ActivePageType,
  displayUsers: string,
  followingUnfollowingInProgress: FollowingUnfollowingInProgress,
  defaultData: DefaultDataType,
};
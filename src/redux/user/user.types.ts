import { CountType, LimitType, OffsetType, TotalCountType } from '../../common/types';
import { AuthStateType } from '../auth/auth.types';
import { PreloaderStateType } from '../preloader/preloader.types';

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
  id: UserIdType,
  firstName: string,
  lastName: string,
  fullName: string
  status: string,
  isFollow: boolean,
  avatar: AvatarType,
  address: AddressType,
}

export type UsersType = Array<UserType>;

export type FollowingUnfollowingInProgressType = Array<number>;

export type isFollowingUnfollowingInProgress = boolean;

export type UserDefaultDataType = {
  avatar: AvatarImageType
}

export type UserIdType = number;

export type ActivePageType = number;

export type DataType = {
  userId: UserIdType,
  isFollowingUnfollowingInProgress: boolean,
}

export type DisplayUsersType = string;

export type UsersStateType = {
  offset: OffsetType,
  limit: LimitType,
  count: CountType,
  totalCount: TotalCountType,
  users: UsersType,
  activePage: ActivePageType,
  displayUsers: DisplayUsersType,
  followingUnfollowingInProgress: FollowingUnfollowingInProgressType,
  defaultData: UserDefaultDataType,
};
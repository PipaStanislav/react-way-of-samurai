import { UsersType, UserType } from '../../redux/user/user.types';
import { MetaDataType } from '../../common/types';

export type GetUserType = Promise<UserType>;
export type GetUsersType = Promise<{ data: UsersType, metaData: MetaDataType }>;
export type CreateUserType = Promise<{ newUser: UserType }>;
export type UpdateUserType = Promise<UserType>;
export type DeleteUserType = Promise<boolean>;
export type FollowType = Promise<boolean>;
export type UnfollowType = Promise<boolean>;
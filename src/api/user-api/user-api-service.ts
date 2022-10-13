import baseApiService from '../base-api-service';
import {
  CreateUserType,
  DeleteUserType,
  FollowType,
  GetUsersType,
  GetUserType,
  UnfollowType,
  UpdateUserType,
} from './user-api-service.types';
import { IdType, QueryType } from '../base-api-service.types';

const userEndpoints = {
  getUser: (id: IdType): string => `/user/${id}`,
  getUsers: (): string => `/user`,
  createUser: (): string => `/user`,
  updateUser: (id: IdType): string => `/user/${id}`,
  deleteUser: (id: IdType): string => `/user/${id}`,
  follow: (): string => `/user/follow`,
  unfollow: (): string => `/user/unfollow`,
}

class userApiService extends baseApiService {
  constructor() {
    super();
  }

  getUser = ({ id, ...query }: QueryType): GetUserType => this.makeRequest(this.METHODS.GET, userEndpoints.getUser(id), { params: query });
  getUsers = (query: QueryType): GetUsersType => this.makeRequest(this.METHODS.GET, userEndpoints.getUsers(), { params: query });
  createUser = (query: QueryType): CreateUserType => this.makeRequest(this.METHODS.POST, userEndpoints.createUser(), { data: query });
  updateUser = ({ id, ...query }: QueryType): UpdateUserType => this.makeRequest(this.METHODS.PATCH, userEndpoints.updateUser(id), { data: query });
  deleteUser = (id: IdType): DeleteUserType => this.makeRequest(this.METHODS.DELETE, userEndpoints.deleteUser(id));
  follow = (query: QueryType): FollowType => this.makeRequest(this.METHODS.POST, userEndpoints.follow(), { data: query });
  unfollow = (query: QueryType): UnfollowType => this.makeRequest(this.METHODS.POST, userEndpoints.unfollow(), { data: query });
}

export default new userApiService();
import baseApiService from '../base-api-service';
import { IdType, QueryType } from '../base-api-service.types';
import {
  CreateProfileType,
  DeleteProfileType,
  GetProfilesType,
  GetProfileType,
  UpdateProfileType,
} from './profile-api-service.types';

const profileEndpoints = {
  getProfile: (id: IdType): string => `/profile/${id}`,
  getProfiles: (): string => `/profile`,
  createProfile: (): string => `/profile`,
  updateProfile: (id: IdType): string => `/profile/${id}`,
  deleteProfile: (id: IdType): string => `/profile/${id}`,
}

class profileApiService extends baseApiService {
  constructor() {
    super();
  }

  getProfile = ({ id, ...query }: QueryType): GetProfileType => this.makeRequest(this.METHODS.GET, profileEndpoints.getProfile(id), { params: query });
  getProfiles = (query: QueryType): GetProfilesType => this.makeRequest(this.METHODS.GET, profileEndpoints.getProfiles(), { params: query });
  createProfile = (query: QueryType): CreateProfileType => this.makeRequest(this.METHODS.POST, profileEndpoints.createProfile(), { data: query });
  updateProfile = ({ id, ...query }: QueryType): UpdateProfileType => this.makeRequest(this.METHODS.PATCH, profileEndpoints.updateProfile(id), { data: query });
  deleteProfile = (id: IdType): DeleteProfileType => this.makeRequest(this.METHODS.DELETE, profileEndpoints.deleteProfile(id));
}

export default new profileApiService();
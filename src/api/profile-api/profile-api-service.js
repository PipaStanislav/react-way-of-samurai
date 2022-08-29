import baseApiService from '../base-api-service';

const profileEndpoints = {
  getProfile: id => `/profile/${id}`,
  getProfiles: () => `/profile`,
  createProfile: () => `/profile`,
  updateProfile: id => `/profile/${id}`,
  deleteProfile: id => `/profile/${id}`,
}

class profileApiService extends baseApiService {
  constructor() {
    super();
  }

  getProfile = ({ id, ...query }) => this.makeRequest(this.METHODS.GET, profileEndpoints.getProfile(id), { params: query });
  getProfiles = query => this.makeRequest(this.METHODS.GET, profileEndpoints.getProfiles(), { params: query });
  createProfile = query => this.makeRequest(this.METHODS.POST, profileEndpoints.createProfile(), { data: query });
  updateProfile = ({ id, ...query }) => this.makeRequest(this.METHODS.PATCH, profileEndpoints.updateProfile(id), { data: query });
  deleteProfile = id => this.makeRequest(this.METHODS.DELETE, profileEndpoints.deleteProfile(id));
}

export default new profileApiService();
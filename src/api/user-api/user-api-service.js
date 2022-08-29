import baseApiService from '../base-api-service';

const userEndpoints = {
  getUser: id => `/user/${id}`,
  getUsers: () => `/user`,
  createUser: () => `/user`,
  updateUser: id => `/user/${id}`,
  deleteUser: id => `/user/${id}`,
}

class userApiService extends baseApiService {
  constructor() {
    super();
  }

  getUser = ({ id, ...query }) => this.makeRequest(this.METHODS.GET, userEndpoints.getUser(id), { params: query });
  getUsers = query => this.makeRequest(this.METHODS.GET, userEndpoints.getUsers(), { params: query });
  createUser = query => this.makeRequest(this.METHODS.POST, userEndpoints.createUser(), { data: query });
  updateUser = ({ id, ...query }) => this.makeRequest(this.METHODS.PATCH, userEndpoints.updateUser(id), { data: query });
  deleteUser = id => this.makeRequest(this.METHODS.DELETE, userEndpoints.deleteUser(id));
}

export default new userApiService();
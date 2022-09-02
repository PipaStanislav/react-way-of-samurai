import baseApiService from '../base-api-service';

const profileEndpoints = {
  login: () => `/auth/login`,
  registration: () => `/auth/registration`,
  authMe: () => '/auth/me',
}

class authApiService extends baseApiService {
  constructor() {
    super();
  }

  login = query => this.makeRequest(this.METHODS.POST, profileEndpoints.login(), { data: query });
  register = query => this.makeRequest(this.METHODS.POST, profileEndpoints.registration(), { data: query });
  authMe = query => this.makeRequest(this.METHODS.POST, profileEndpoints.authMe(), { data: query });
}

export default new authApiService();
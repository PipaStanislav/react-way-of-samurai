import baseApiService from '../base-api-service';
import { QueryType } from '../base-api-service.types';
import { AuthMeType, LoginType, RegisterType } from './auth-api-service.types';

const profileEndpoints = {
  login: (): string => `/auth/login`,
  registration: (): string => `/auth/registration`,
  authMe: (): string => '/auth/me',
}

class authApiService extends baseApiService {
  constructor() {
    super();
  }

  login = (query: QueryType): LoginType => this.makeRequest(this.METHODS.POST, profileEndpoints.login(), { data: query });
  register = (query: QueryType): RegisterType => this.makeRequest(this.METHODS.POST, profileEndpoints.registration(), { data: query });
  authMe = (query: QueryType): AuthMeType => this.makeRequest(this.METHODS.POST, profileEndpoints.authMe(), { data: query });
}

export default new authApiService();
import axios from 'axios';
import BASE_URL from '../constants/api-constants';
import HTTP_METHODS from './constants/methods';
import { BaseApiServiceInterface } from './base-api-service.interfaces';

class BaseApiService implements BaseApiServiceInterface {
  METHODS;

  constructor() {
    this.METHODS = HTTP_METHODS;
  }

  getFullUrl = (url: string) => `${ BASE_URL }${ url }`;

  async makeRequest(method: string, url: string, config: object = {}) {
    try {
      const result = await axios({ method, url: this.getFullUrl(url), ...config });

      return result.data;
    } catch (error) {
      throw error;
    }
  }

}

export default BaseApiService;
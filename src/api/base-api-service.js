import axios from 'axios';
import BASE_URL from '../constants/api-constants';
import HTTP_METHODS from './constants/methods';

class BaseApiService {
  constructor() {
    this.METHODS = HTTP_METHODS;
  }

  getFullUrl = url => `${BASE_URL}${url}`;

  async makeRequest(method, url, config = {}) {
    try {
      const result = await axios({ method, url: this.getFullUrl(url), ...config });

      return result.data;
    } catch (error) {
      throw error;
    }
  }

}

export default BaseApiService
import baseApiService from '../base-api-service';

const userEndpoints = {
  getMusics: () => `/music`,
}

class musicApiService extends baseApiService {
  constructor() {
    super();
  }
  getMusics = query => this.makeRequest(this.METHODS.GET, userEndpoints.getMusics(), { params: query });
}

export default new musicApiService();
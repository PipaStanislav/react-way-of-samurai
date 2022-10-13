import baseApiService from '../base-api-service';
import { QueryType } from '../base-api-service.types';
import { GetMusicsType } from './music-api-service.types';

const userEndpoints = {
  getMusics: (): string => `/music`,
}

class musicApiService extends baseApiService {
  constructor() {
    super();
  }
  getMusics = (query: QueryType): GetMusicsType => this.makeRequest(this.METHODS.GET, userEndpoints.getMusics(), { params: query });
}

export default new musicApiService();
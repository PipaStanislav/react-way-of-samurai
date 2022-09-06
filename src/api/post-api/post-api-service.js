import baseApiService from '../base-api-service';

const postEndpoints = {
  getPost: id => `/post/${id}`,
  getPosts: () => `/post`,
  createPost: () => `/post`,
  updatePost: id => `/post/${id}`,
  deletePost: id => `/post/${id}`,
}

class postApiService extends baseApiService {
  constructor() {
    super();
  }

  getPost = ({ id, ...query }) => this.makeRequest(this.METHODS.GET, postEndpoints.getPost(id), { params: query });
  getPosts = query => this.makeRequest(this.METHODS.GET, postEndpoints.getPosts(), { params: query });
  createPost = query => this.makeRequest(this.METHODS.POST, postEndpoints.createPost(), { data: query });
  updatePost = ({ id, ...query }) => this.makeRequest(this.METHODS.PATCH, postEndpoints.updatePost(id), { data: query });
  deletePost = id => this.makeRequest(this.METHODS.DELETE, postEndpoints.deletePost(id));
}

export default new postApiService();
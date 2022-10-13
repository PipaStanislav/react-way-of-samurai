import baseApiService from '../base-api-service';
import { QueryType } from '../base-api-service.types';
import { CreatePostType, DeletePostType, GetPostsType, GetPostType, UpdatePostType } from './post-api-service.types';
import { IdType } from '../../common/types';

const postEndpoints = {
  getPost: (id: IdType): string => `/post/${id}`,
  getPosts: (): string => `/post`,
  createPost: (): string => `/post`,
  updatePost: (id: IdType): string => `/post/${id}`,
  deletePost: (id: IdType): string => `/post/${id}`,
}

class postApiService extends baseApiService {
  getPost = ({ id, ...query }: QueryType): GetPostType => this.makeRequest(this.METHODS.GET, postEndpoints.getPost(id), { params: query });
  getPosts = (query: QueryType): GetPostsType => this.makeRequest(this.METHODS.GET, postEndpoints.getPosts(), { params: query });
  createPost = (query: QueryType): CreatePostType => this.makeRequest(this.METHODS.POST, postEndpoints.createPost(), { data: query });
  updatePost = ({ id, ...query }: QueryType): UpdatePostType => this.makeRequest(this.METHODS.PATCH, postEndpoints.updatePost(id), { data: query });
  deletePost = (id: IdType): DeletePostType => this.makeRequest(this.METHODS.DELETE, postEndpoints.deletePost(id));
}

export default new postApiService();
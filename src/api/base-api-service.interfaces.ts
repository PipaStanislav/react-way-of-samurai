import { HTTP_METHODS_TYPE } from './constants/methods';

export interface BaseApiServiceInterface {
  METHODS: HTTP_METHODS_TYPE,
  getFullUrl(url: string): string
  makeRequest(method: string, url: string, config: object): object | Error,
}
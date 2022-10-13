import baseApiService from '../base-api-service';
import { IdType, QueryType } from '../base-api-service.types';
import {
  AddMessageType,
  CreateDialogType,
  DeleteDialogType,
  GetDialogsType,
  GetDialogType,
} from './dialog-api-service.types';

const dialogEndpoints = {
  getDialog: (id: IdType): string => `/dialog/${id}`,
  getDialogs: (): string => `/dialog`,
  createDialog: (): string => `/dialog`,
  deleteDialog: (id: IdType): string => `/dialog/${id}`,
  addMessage: (): string => `/dialog/add-message`,
}

class dialogApiService extends baseApiService {
  constructor() {
    super();
  }

  getDialog = ({ id, ...query }: QueryType): GetDialogType => this.makeRequest(this.METHODS.GET, dialogEndpoints.getDialog(id), { params: query });
  getDialogs = (query: QueryType): GetDialogsType => this.makeRequest(this.METHODS.GET, dialogEndpoints.getDialogs(), { params: query });
  createDialog = (query: QueryType): CreateDialogType => this.makeRequest(this.METHODS.POST, dialogEndpoints.createDialog(), { data: query });
  deleteDialog = (id: IdType): DeleteDialogType => this.makeRequest(this.METHODS.DELETE, dialogEndpoints.deleteDialog(id));
  addMessage = (query: QueryType): AddMessageType => this.makeRequest(this.METHODS.POST, dialogEndpoints.addMessage(), { data: query });
}

export default new dialogApiService();
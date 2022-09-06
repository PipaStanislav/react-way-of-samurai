import baseApiService from '../base-api-service';

const dialogEndpoints = {
  getDialog: id => `/dialog/${id}`,
  getDialogs: () => `/dialog`,
  createDialog: () => `/dialog`,
  deleteDialog: id => `/dialog/${id}`,
  addMessage: id => `/dialog/add-message`,
}

class dialogApiService extends baseApiService {
  constructor() {
    super();
  }

  getDialog = ({ id, ...query }) => this.makeRequest(this.METHODS.GET, dialogEndpoints.getDialog(id), { params: query });
  getDialogs = query => this.makeRequest(this.METHODS.GET, dialogEndpoints.getDialogs(), { params: query });
  createDialog = query => this.makeRequest(this.METHODS.POST, dialogEndpoints.createDialog(), { data: query });
  deleteDialog = id => this.makeRequest(this.METHODS.DELETE, dialogEndpoints.deleteDialog(id));
  addMessage = query => this.makeRequest(this.METHODS.POST, dialogEndpoints.addMessage(), { data: query });
}

export default new dialogApiService();
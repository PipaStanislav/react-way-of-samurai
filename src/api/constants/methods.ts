export type HTTP_METHODS_TYPE = {
  GET: string,
  POST: string,
  PUT: string,
  PATCH: string,
  DELETE: string,
}

const HTTP_METHODS: HTTP_METHODS_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export default HTTP_METHODS;

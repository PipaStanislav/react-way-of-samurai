type DataType = {
  email: string,
  userId: number,
  login: string,
}

type Error = {
  message: string,
  statusError: number,
}

export type LoginType = Promise<{ data: DataType, error: Error }>;
export type RegisterType = Promise<{ data: DataType, error: Error }>;
export type AuthMeType = Promise<{ data: DataType, error: Error }>;
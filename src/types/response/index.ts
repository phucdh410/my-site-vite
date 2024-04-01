import { AxiosResponse } from 'axios';

export type IApiResponse<T, E = any> = AxiosResponse<IDataResponse<T>, E>;

export interface IDataResponse<T> {
  data: T;
  errorCode: number;
  message: string;
  errors?: any;
}

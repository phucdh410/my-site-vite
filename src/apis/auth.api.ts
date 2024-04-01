import { ILoginParams, ILoginResponse, IRefreshParams } from '@/types/auth';
import { IApiResponse } from '@/types/response';
import { get, post } from '@/utils/axios/methods';

export const authApi = {
  login: async (
    body: ILoginParams,
  ): Promise<IApiResponse<ILoginResponse, any>> => {
    return await post('/auth/login', body);
  },
  logout: async () => {
    return await get('/auth/logout');
  },
  getProfile: async () => {
    return await get('/auth/get-profile');
  },
  refresh: async (
    body: IRefreshParams,
  ): Promise<IApiResponse<ILoginResponse, any>> => {
    return await post('/auth/refresh', body);
  },
};

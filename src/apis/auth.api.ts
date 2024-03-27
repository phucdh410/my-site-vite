import { ILoginParams } from '@/types/auth';
import { get, post } from '@/utils/axios/methods';

export const authApi = {
  login: async (body: ILoginParams) => {
    return await post('/auth/login', { ...body, type: 4 });
  },
  logout: async () => {
    return await get('/auth/logout');
  },
  getProfile: async () => {
    return await get('/auth/get-profile');
  },
};

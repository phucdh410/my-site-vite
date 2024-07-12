import { IApiResponse } from '@/types/response';
import { get } from '@/utils/axios/methods';

export const productApi = {
  getAll: async (): Promise<
    IApiResponse<{ id: string; name: string; image: string }[]>
  > => {
    return await get('/products/getAll.json');
  },
};

import { post } from '@/utils/axios/methods';

export const filesApi = {
  upload: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return await post('/files/upload', formData);
  },
};

import { trueFile } from '@/funcs/file';
import { post } from '@/utils/axios/methods';

export const filesApi = {
  upload: async (file: File) => {
    const formatFile = trueFile(file);

    const formData = new FormData();
    formData.append('file', formatFile);

    return await post('/files/upload', formData);
  },
};

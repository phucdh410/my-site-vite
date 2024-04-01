import axios, { AxiosError } from 'axios';

import { handleTimeout } from './functions';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: import.meta.env.VITE_API_TIMEOUT || 500000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<any>) => {
    if (error.code === 'ECONNABORTED') {
      handleTimeout();
    }
    if (error?.response?.status === 403) {
      console.log('Logout, không có quyền');
      return Promise.reject(error);
    }

    const _error = {
      data: error?.response?.data?.data || null,
      message: error?.response?.data?.message || error?.message || '',
      status: error?.response?.status,
    };

    return Promise.reject(_error);
  },
);

export default axiosInstance;

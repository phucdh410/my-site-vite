import axios, { AxiosError } from 'axios';

import { handleTimeout, refreshToken, webLogout } from './functions';

const axiosInstance = axios.create({
  // baseURL: `${import.meta.env.VITE_API_URL}/api`,
  baseURL: `/api`, //! MOCKUP
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
  async (error: AxiosError<any>) => {
    if (error.code === 'ECONNABORTED') {
      handleTimeout();
    }
    if (error?.response?.status === 403) {
      console.log('Logout, không có quyền');
      return Promise.reject(error);
    }
    if (error?.response?.status === 401) {
      if (error.response.data?.errorCode === 401) {
        const originalRequest = error.config;
        let retry = false;

        if (originalRequest && !retry) {
          retry = true;

          const newToken = await refreshToken();

          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

          return axiosInstance(originalRequest);
        }
      } else {
        webLogout();
      }
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

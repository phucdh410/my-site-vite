import { AxiosRequestConfig } from 'axios';

import axiosInstance from '.';

export const get = async (url: string, options: AxiosRequestConfig = {}) => {
  return await axiosInstance.get(url, { ...options });
};

export const post = async (
  url: string,
  body: any,
  options: AxiosRequestConfig = {},
) => {
  return await axiosInstance.post(url, body, { ...options });
};

export const put = async (
  url: string,
  body: any,
  options: AxiosRequestConfig = {},
) => {
  return await axiosInstance.put(url, body, { ...options });
};

export const remove = async (url: string, options: AxiosRequestConfig) => {
  return await axiosInstance.delete(url, { ...options });
};

import Cookies from 'js-cookie';

import { authApi } from '@/apis/auth.api';
import { store } from '@/redux';
import { updateLoginStatus } from '@/redux/slices';
import { ILoginParams, IProfile } from '@/types/auth';

import axiosInstance from '.';

//#region Token
export const setAuthToken = (token: string) => {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
  Cookies.set('token', token, { expires: 30 });
};

export const clearAuthToken = () => {
  delete axiosInstance.defaults.headers.common['Authorization'];
  Cookies.remove('token');
};
//#endregion

//#region Profile
export const saveProfile = (profile: IProfile) => {
  Cookies.set('profile', JSON.stringify(profile), {
    expires: 30,
  });
};

export const clearProfile = () => {
  Cookies.remove('profile');
};

export const retrieveProfile = (): IProfile | null => {
  const profile = Cookies.get('profile');

  if (profile) {
    return JSON.parse(profile);
  } else return null;
};
//#endregion

//#region Authenticate
export const loginFunc = async (body: ILoginParams) => {
  const res = await authApi.login(body);

  const access_token = res?.data?.data?.access_token;

  if (access_token) {
    setAuthToken(access_token);

    const response = await authApi.getProfile();

    const profile = response?.data?.data;

    store.dispatch(updateLoginStatus(true));

    saveProfile(profile);
  }
};

export const logoutFunc = async () => {
  try {
    await authApi.logout();
  } finally {
    clearAuthToken();
    clearProfile();

    store.dispatch(updateLoginStatus(false));
  }
};
//#endregion

//#region Interceptor
export const handleTimeout = () => {
  throw new Error('Quá thời gian chờ, vui lòng thử lại');
};
//#endregion

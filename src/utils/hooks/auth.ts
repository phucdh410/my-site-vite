import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';

import { setAuthToken } from '../axios/functions';

import { useSelector } from './redux';

export const useAuthCheck = (layout: 'login' | 'main') => {
  const isLogined = useSelector((state) => state.auth.isLogined);

  const navigate = useNavigate();

  useEffect(() => {
    if (layout === 'main' && !isLogined) {
      navigate('/login');
    }

    if (layout === 'login' && isLogined) {
      navigate('/');
    }
  }, [isLogined, layout]);

  useEffect(() => {
    if (isLogined) {
      const access_token = Cookies.get('token');
      access_token && setAuthToken(access_token);
    }
  }, [isLogined]);
};

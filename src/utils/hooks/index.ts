import { useEffect } from 'react';
import { useSelector as useReduxSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';

import { IRootState } from '@/redux';

import { setAuthToken } from '../axios/functions';

export const useSelector = useReduxSelector.withTypes<IRootState>();

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

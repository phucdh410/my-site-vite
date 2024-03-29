import { useEffect } from 'react';
import { useSelector as useReduxSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IRootState } from '@/redux';

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
};

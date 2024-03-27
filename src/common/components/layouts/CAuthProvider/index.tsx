import { useEffect } from 'react';
import { Outlet, redirect } from 'react-router-dom';

import { useSelector } from '@/utils/hooks';

export const CAuthProvider = () => {
  //#region Data
  const isLogined = useSelector((state) => state.auth.isLogined);
  //#endregion

  useEffect(() => {
    if (isLogined) {
      redirect('/');
    } else redirect('/login');
  }, [isLogined]);

  return (
    <>
      <Outlet />
    </>
  );
};

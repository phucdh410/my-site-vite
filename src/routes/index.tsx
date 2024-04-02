import { Outlet, RouteObject } from 'react-router-dom';

import { CErrorPage } from '@/components/others';
import { asyncLayout } from '@/funcs/route';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <CErrorPage />,
    children: [
      {
        path: '/',
        element: asyncLayout(() => import('@/components/layouts/CMainLayout')),
        children: [
          {
            path: '/',
            element: asyncLayout(
              () => import('@/modules/dashboard/pages/MDashboardPage'),
            ),
          },
          {
            path: '/e-commerce',
            element: <div>E-Commerce page</div>,
          },
          {
            path: '/analytics',
            element: <div>Analytics page</div>,
          },
          {
            path: '/banking',
            element: <div>Banking page</div>,
          },
          {
            path: '/booking',
            element: <div>Booking page</div>,
          },
          {
            path: '/file',
            element: asyncLayout(
              () => import('@/modules/file/pages/MFilesRootPage'),
            ),
          },
        ],
      },
      {
        path: '/login',
        element: asyncLayout(() => import('@/modules/auth/pages/MLoginPage')),
      },
    ],
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
];

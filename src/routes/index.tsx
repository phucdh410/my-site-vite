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
            path: '/app',
            element: <div>App page</div>,
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
            element: asyncLayout(
              () => import('@/modules/booking/pages/MBookingPage'),
            ),
          },
          {
            path: '/hounter',
            element: asyncLayout(
              () => import('@/modules/hounter/pages/MHounterPage'),
            ),
          },
          {
            path: '/file',
            element: asyncLayout(
              () => import('@/modules/file/pages/MFilesRootPage'),
            ),
          },
          {
            path: '/studio',
            element: asyncLayout(
              () => import('@/modules/studio/pages/MStudioPage'),
            ),
          },
          {
            path: '/confirm',
            element: asyncLayout(
              () => import('@/modules/confirm/pages/MConfirmPage'),
            ),
          },
          {
            path: '/user',
            children: [
              {
                path: '/user/profile',
                element: <div>User profile page</div>,
              },
              {
                path: '/user/cards',
                element: <div>User cards page</div>,
              },
              {
                path: '/user/list',
                element: <div>User list page</div>,
              },
              {
                path: '/user/create',
                element: <div>User create page</div>,
              },
            ],
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

import {
  AccountBalance,
  AddAPhoto,
  CalendarMonth,
  Chat,
  CoPresent,
  Description,
  Equalizer,
  Group,
  House,
  LocalMall,
  ShoppingCart,
  SpeedOutlined,
  Style,
} from '@mui/icons-material';

import { ISidebar } from '@/types/sidebar/index';

export const SIDEBAR: ISidebar = [
  {
    id: 'Overview',
    label: 'Overview',
    children: [
      {
        id: 'App',
        label: 'App',
        path: '/app',
        icon: <SpeedOutlined />,
        children: false,
      },
      {
        id: 'E-commerce',
        label: 'E-Commerce',
        path: '/e-commerce',
        icon: <LocalMall />,
        children: false,
      },
      {
        id: 'Analytics',
        label: 'Analytics',
        path: '/analytics',
        icon: <Equalizer />,
        children: false,
      },
      {
        id: 'Banking',
        label: 'Banking',
        path: '/banking',
        icon: <AccountBalance />,
        children: false,
      },
      {
        id: 'Booking',
        label: 'Booking',
        path: '/booking',
        icon: <Style />,
        children: false,
      },
      {
        id: 'Hounter',
        label: 'Hounter',
        path: '/hounter',
        icon: <House />,
        children: false,
      },
      {
        id: 'File',
        label: 'File',
        path: '/file',
        icon: <Description />,
        children: false,
      },
      {
        id: 'Studio',
        label: 'Studio',
        path: '/studio',
        icon: <AddAPhoto />,
        children: false,
      },
      {
        id: 'Confirm',
        label: 'Confirm',
        path: '/confirm',
        icon: <CoPresent />,
        children: false,
      },
    ],
  },
  {
    id: 'Management',
    label: 'Management',
    children: [
      {
        id: 'User',
        label: 'User',
        path: '/user',
        icon: <Group />,
        children: [
          { label: 'Profile', path: '/profile' },
          { label: 'Cards', path: '/cards' },
          { label: 'List', path: '/list' },
          { label: 'Create', path: '/create' },
        ],
      },
      {
        id: 'Product',
        label: 'Product',
        path: '/product',
        icon: <ShoppingCart />,
        children: [
          { label: 'Profile', path: '/profile' },
          { label: 'Cards', path: '/cards' },
          { label: 'List', path: '/list' },
          { label: 'Create', path: '/create' },
        ],
      },
      {
        id: 'Calendar',
        label: 'Calendar',
        path: '/calendar',
        icon: <CalendarMonth />,
        children: false,
      },
    ],
  },
  {
    id: 'Other Cases',
    label: 'Other Cases',
    children: [
      {
        id: 'Chat',
        label: 'Chat',
        path: '/chat',
        icon: <Chat />,
        children: false,
      },
    ],
  },
];

import { Apartment, Home, Villa } from '@mui/icons-material';

import { TYPES_OF_APARTMENT } from '../types';

export const TYPES_FILTER = [
  { label: 'House', icon: <Home />, value: TYPES_OF_APARTMENT.House },
  { label: 'Villa', icon: <Villa />, value: TYPES_OF_APARTMENT.Villa },
  {
    label: 'Apartment',
    icon: <Apartment />,
    value: TYPES_OF_APARTMENT.Apartment,
  },
];

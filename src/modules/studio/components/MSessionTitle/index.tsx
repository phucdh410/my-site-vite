import { PropsWithChildren } from 'react';

import { Typography } from '@mui/material';

export const MSessionTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      fontSize="2.4rem"
      textTransform="capitalize"
      fontFamily="var(--font-raleway)"
      fontWeight={700}
      mb={4}
    >
      {children}
    </Typography>
  );
};

import { forwardRef } from 'react';

import { Grid2Props, Unstable_Grid2 as Grid } from '@mui/material';

export const CGrid = forwardRef<HTMLDivElement, Grid2Props>(
  ({ children, ...props }, ref) => {
    return (
      <Grid ref={ref} {...props}>
        {children}
      </Grid>
    );
  },
);

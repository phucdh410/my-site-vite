import { Call } from '@mui/icons-material';
import { Button, Divider, Stack, Typography } from '@mui/material';

import { CGrid } from '@/components/muis';

import { MSessionTitle } from '../MSessionTitle';

import BathIcon from './assets/bath.svg?react';
import BedIcon from './assets/bed.svg?react';
import GarageIcon from './assets/garage.svg?react';
import StairsIcon from './assets/stairs.svg?react';

export const MSellPreview = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mt={14}
      gap="30px"
    >
      <Stack flex={0.5}>
        <MSessionTitle
          sessionName="Ready To Sell!"
          title="Let's Tour And See Our House!"
        />
        <Typography whiteSpace="pre-wrap">
          Houses recommended by our partners that have been
          <br />
          curated to become the home of your dreams!
        </Typography>
        <Typography>House Detail</Typography>
        <CGrid container columns={2}>
          <CGrid xs={1}>
            <Stack direction="row" alignItems="center">
              <BedIcon />
              <Typography>4 Bedrooms</Typography>
            </Stack>
          </CGrid>
          <CGrid xs={1}>
            <Stack direction="row" alignItems="center">
              <BathIcon />
              <Typography>2 Bathrooms</Typography>
            </Stack>
          </CGrid>
          <CGrid xs={1}>
            <Stack direction="row" alignItems="center">
              <GarageIcon />
              <Typography>1 Carport</Typography>
            </Stack>
          </CGrid>
          <CGrid xs={1}>
            <Stack direction="row" alignItems="center">
              <StairsIcon />
              <Typography>2 Floors</Typography>
            </Stack>
          </CGrid>
        </CGrid>
        <Divider />
        <Stack direction="row" alignItems="center">
          <img src="/assets/images/avatars/avatar_9.jpg" alt="" />
          <Stack>
            <Typography>Dianne Russell</Typography>
            <Typography>Manager Director</Typography>
          </Stack>
          <Button startIcon={<Call />}>Contact Now</Button>
        </Stack>
      </Stack>
      <Stack flex={0.5}></Stack>
    </Stack>
  );
};

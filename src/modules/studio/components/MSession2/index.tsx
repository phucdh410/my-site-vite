import { Container, Stack, Typography } from '@mui/material';

import logo2 from '../../assets/airbnb.png';
import logo4 from '../../assets/amazon.png';
import logo1 from '../../assets/google.png';
import logo3 from '../../assets/uber-eats.png';
import { MSessionTitle } from '../MSessionTitle';

export const MSession2 = () => {
  return (
    <Container sx={{ pt: 5 }}>
      <MSessionTitle>Our Client</MSessionTitle>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={-3}
      >
        <Typography
          maxWidth={300}
          fontWeight={300}
          color="#565656"
          fontSize="0.95rem"
          fontFamily="var(--font-public-sans)"
        >
          Several selected clients, who already believe in our service.
        </Typography>
        <Stack direction="row" gap="60px">
          <Stack alignItems="center" justifyContent="center">
            <img src={logo1} alt="" />
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <img src={logo2} alt="" />
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <img src={logo3} alt="" />
          </Stack>
          <Stack alignItems="center" justifyContent="end">
            <img src={logo4} alt="" />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

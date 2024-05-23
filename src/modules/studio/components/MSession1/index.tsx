import { Button, Stack, Typography } from '@mui/material';

import imgDot from '../../assets/dot-ornament.png';
import imgSession1 from '../../assets/image-mock-1.png';
import { MSessionTitle } from '../MSessionTitle';

export const MSession1 = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      mb={12}
    >
      <Stack flex={0.5}>
        <Stack pl={7}>
          <MSessionTitle>a digital product agency</MSessionTitle>
          <Typography
            fontSize="0.95rem"
            color="#565656"
            fontFamily="var(--font-public-sans)"
            maxWidth={450}
            fontWeight={300}
            mb={3.5}
          >
            Leading digital agency with solid design and development expertise.
            We build readymade websites mobile applications, and elaborate
            online business services.
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              textTransform: 'capitalize',
              borderRadius: '30px',
              backgroundColor: '#2639ED',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '14px 34px',
              letterSpacing: '1px',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            contact now
          </Button>
        </Stack>
      </Stack>
      <Stack position="absolute" zIndex={-1} left={0} bottom={0}>
        <img src={imgDot} alt="" />
      </Stack>

      <Stack flex={0.5} position="relative">
        <img src={imgSession1} alt="" />
        <Stack
          zIndex={-1}
          position="absolute"
          borderRadius="100%"
          height={129}
          width={129}
          bgcolor="#DAE9FF"
          sx={{ transform: 'translateX(-50%)' }}
        ></Stack>
        <Stack
          left="55%"
          bottom="-22%"
          zIndex={-1}
          position="absolute"
          bgcolor="#FFF5DB"
          height={178}
          width={178}
          sx={{ borderBottomRightRadius: '120px' }}
        ></Stack>
      </Stack>
    </Stack>
  );
};

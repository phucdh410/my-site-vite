import { useMemo } from 'react';

import { Container, Stack, SvgIcon, Typography } from '@mui/material';
import Cookies from 'js-cookie';

import { CGrid } from '@/components/muis';
import { IProfile } from '@/types/auth';

import { MCheckNowButton, MWelcomeSvg } from '../../components';

const MDashboardPage = () => {
  //#region Data
  const profile = useMemo<IProfile | null>(() => {
    const jsonValue = Cookies.get('profile');

    if (jsonValue) {
      return JSON.parse(jsonValue);
    }

    return null;
  }, [Cookies.get('profile')]);
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Container maxWidth="_3xl">
      <CGrid container gap={1.5}>
        <CGrid xs={8}>
          <Stack
            direction="row"
            borderRadius="16px"
            sx={{
              background:
                'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)',
            }}
          >
            <Stack
              p={5}
              alignItems="start"
              justifyContent="center"
              color="rgb(0, 75, 80)"
              flex={1}
            >
              <Typography
                component="h4"
                whiteSpace="pre-line"
                marginBottom="1.3rem"
                fontWeight={700}
                fontFamily="var(--font-public-sans)"
                fontSize="1.5rem"
                color="inherit"
              >
                Welcome back 👋
                <br />
                {profile?.fullname}
              </Typography>
              <Typography
                mb={5}
                color="inherit"
                maxWidth={360}
                fontFamily="var(--font-public-sans)"
                fontSize="0.875rem"
                sx={{ opacity: 0.8 }}
              >
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything.
              </Typography>
              <MCheckNowButton>Check now</MCheckNowButton>
            </Stack>
            <Typography component="span" p={3}>
              <SvgIcon
                viewBox="0 0 480 360"
                sx={{ height: '100%', width: '100%' }}
              >
                <MWelcomeSvg />
              </SvgIcon>
            </Typography>
          </Stack>
        </CGrid>
        <CGrid xs={4}></CGrid>
      </CGrid>
    </Container>
  );
  //#endregion
};

export default MDashboardPage;

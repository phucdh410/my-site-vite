import { useMemo } from 'react';
import { Hexagon, ResponsiveHoneycomb } from 'react-honeycomb';

import { Box, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Cookies from 'js-cookie';

import { CGrid } from '@/components/muis';
import { CHoneycomb } from '@/components/others';
import { IProfile } from '@/types/auth';

import { MCheckNowButton, MSwiper, MWelcomeSvg } from '../../components';

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
  interface Item {
    id: string;
    name: string;
    img: string;
  }

  const items: Item[] = [
    { id: '1', name: '1', img: `https://picsum.photos/250?random=${1}` },
    { id: '2', name: '2', img: `https://picsum.photos/250?random=${2}` },
    { id: '3', name: '3', img: `https://picsum.photos/250?random=${3}` },
    { id: '4', name: '4', img: `https://picsum.photos/250?random=${4}` },
    { id: '5', name: '5', img: `https://picsum.photos/250?random=${5}` },
    { id: '6', name: '6', img: `https://picsum.photos/250?random=${6}` },
    { id: '7', name: '7', img: `https://picsum.photos/250?random=${7}` },
    { id: '8', name: '8', img: `https://picsum.photos/250?random=${8}` },
    { id: '9', name: '9', img: `https://picsum.photos/250?random=${9}` },
    { id: '10', name: '10', img: `https://picsum.photos/250?random=${10}` },
    { id: '11', name: '11', img: `https://picsum.photos/250?random=${11}` },
    { id: '12', name: '12', img: `https://picsum.photos/250?random=${12}` },
    { id: '13', name: '13', img: `https://picsum.photos/250?random=${13}` },
    { id: '14', name: '14', img: `https://picsum.photos/250?random=${14}` },
    { id: '15', name: '15', img: `https://picsum.photos/250?random=${15}` },
  ];
  //#region Render
  return (
    <Container maxWidth="_2xl">
      <CGrid container spacing={3}>
        <CGrid xs>
          <Stack
            direction="row"
            height="100%"
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
        <CGrid xs="auto">
          <MSwiper />
        </CGrid>
      </CGrid>
      <Stack maxWidth={600} mt={4}>
        <CHoneycomb
          size={70}
          items={items}
          renderItem={(item, index) => (
            <Stack
              sx={{
                height: '100%',
              }}
            >
              <img src={item.img} alt={item.id} style={{ height: '100%' }} />
            </Stack>
          )}
        />
      </Stack>
    </Container>
  );
  //#endregion
};

export default MDashboardPage;

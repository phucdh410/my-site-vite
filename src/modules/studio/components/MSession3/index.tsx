import { useCallback } from 'react';

import { Container, Stack, Typography } from '@mui/material';

import img1 from '../../assets/box-search.svg';
import img4 from '../../assets/chart-square.svg';
import img2 from '../../assets/code.svg';
import imgDot from '../../assets/dot-ornament.png';
import img3 from '../../assets/empty-wallet.svg';
import { MSessionTitle } from '../MSessionTitle';

const leftCol = [
  {
    id: '1',
    title: 'Business Idea Planning',
    description: 'We present you a proposal and\ndiscuss niffty-gritty like',
    color: '#2639ED',
    bgcolor: '#F1F7FF',
    icon: img1,
  },
  {
    id: '2',
    title: 'Development Website and App',
    description: 'Communication protocols apart\nfrom engagement models',
    color: '#FF007A',
    bgcolor: '#FFF2F8',
    icon: img2,
  },
];
const rightCol = [
  {
    id: '3',
    title: 'Financial Planning System',
    description: 'Protocols apart from aengage\nmodels, pricing billing',
    color: '#FF9900',
    bgcolor: '#FFF7E3',
    icon: img3,
  },
  {
    id: '4',
    title: 'Market Analysis Project',
    description: 'Protocols apart from aengage\nmodels, pricing billing',
    color: '#00DA71',
    bgcolor: '#DEFFEE',
    icon: img4,
  },
];

export const MSession3 = () => {
  //#region Event
  const renderCard = useCallback(
    (item: {
      id: string;
      title: string;
      description: string;
      color: string;
      bgcolor: string;
      icon: string;
    }) => {
      return (
        <Stack
          width={308}
          height={379}
          borderRadius="40px"
          py={5}
          px={4}
          alignItems="center"
          gap="30px"
          bgcolor="white"
          border="1px solid #F2F2F2"
          boxShadow="0 10px 40px 2px rgb(0 0 0 / 6%)"
        >
          <Stack
            maxWidth={120}
            padding="28px"
            borderRadius="20px"
            bgcolor={item.bgcolor}
          >
            <img src={item.icon} alt="" />
          </Stack>
          <Typography
            fontWeight={600}
            fontFamily="var(--font-raleway)"
            fontSize="1.5rem"
            textAlign="center"
          >
            {item.title}
          </Typography>
          <Typography
            fontSize="0.8rem"
            textAlign="center"
            whiteSpace="pre-wrap"
            color="#757575"
            fontWeight={500}
          >
            {item.description}
          </Typography>
        </Stack>
      );
    },
    [],
  );
  //#endregion

  //#region Render
  return (
    <Container sx={{ mt: 16 }}>
      <Stack direction="row" alignItems="center" position="relative" gap={11}>
        <Stack pl={8}>
          <MSessionTitle>
            How can we help
            <br />
            your Business?
          </MSessionTitle>
          <Typography color="#565656">
            We build readymade websites, mobile applications,
            <br />
            and elaborate online business services.
          </Typography>
        </Stack>
        <Stack direction="row" gap="34px">
          <Stack mt={10} gap="34px">
            {leftCol.map((card) => renderCard(card))}
          </Stack>
          <Stack gap="34px">{rightCol.map((card) => renderCard(card))}</Stack>
        </Stack>

        {/* Overlay */}
        <Stack
          position="absolute"
          height={170}
          width={170}
          bgcolor="#FFF5DB"
          top="42%"
          left={0}
          zIndex={-1}
          sx={{ borderTopLeftRadius: '6rem', transform: 'translateY(-42%)' }}
        ></Stack>

        <Stack
          position="absolute"
          height={619}
          width={980}
          bgcolor="#F4F9FF"
          top="50%"
          right={0}
          zIndex={-1}
          sx={{ borderTopLeftRadius: '8rem', transform: 'translateY(-50%)' }}
        ></Stack>

        <Stack
          position="absolute"
          bottom="12%"
          left="5%"
          zIndex={-2}
          sx={{ borderTopLeftRadius: '6rem', transform: 'translateY(12%)' }}
        >
          <img src={imgDot} alt="" />
        </Stack>

        <Stack
          position="absolute"
          height={140}
          width={140}
          bgcolor="white"
          bottom="5%"
          right="6%"
          zIndex={-2}
          border="8.8px solid #FF007A"
          borderRadius="100%"
          sx={{ transform: 'translateY(5%)' }}
        ></Stack>

        {/* Overlay */}
      </Stack>
    </Container>
  );
  //#endregion
};

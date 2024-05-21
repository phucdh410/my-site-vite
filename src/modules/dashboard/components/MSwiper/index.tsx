import { useState } from 'react';

import { Box, Paper, Stack, Typography } from '@mui/material';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '@/assets/images/dashboard/test1.jpg';
import img2 from '@/assets/images/dashboard/test2.jpg';
import img3 from '@/assets/images/dashboard/test3.jpg';

import 'swiper/css/parallax';
import 'swiper/css/autoplay';

import { MNavigation } from './MNavigation';
import { MPagination } from './MPagination';

import 'swiper/css';
import './styles.scss';

const DATA = [
  {
    id: '1',
    image: img1,
    title: '10 Essential Tips for Healthy Living',
    description:
      'The old oak tree stood tall and majestic, its branches swaying gently in the breeze.',
  },
  {
    id: '2',
    image: img2,
    title: 'The Ultimate Guide to Productivity Hacks',
    description:
      'The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.',
  },
  {
    id: '3',
    image: img3,
    title: 'Exploring the Hidden Gems of [Destination]',
    description:
      'She eagerly opened the gift, her eyes sparkling with excitement.',
  },
];

export const MSwiper = () => {
  //#region Data
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  //   const swiperRef = useRef<null | SwiperType>(null);

  //#endregion

  //#region Event
  const onSlideChange = (swiper: SwiperType) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  //   const onPaginate = (newIndex: number) => () => {
  //     swiperRef.current?.slideTo(newIndex);
  //   };
  //#endregion

  //#region Render
  return (
    <Paper
      className="my-swiper-wrapper"
      sx={{
        borderRadius: '16px',
        width: 480,
        height: 320,
        overflow: 'hidden',
      }}
    >
      <Swiper
        //   onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="my-swiper"
        loop
        speed={700}
        modules={[Parallax, Autoplay]}
        autoplay
        parallax
        initialSlide={activeSlideIndex}
        onSlideChange={onSlideChange}
      >
        {DATA.map((slide, index) => (
          <SwiperSlide key={index}>
            {() => (
              <Box height="100%" width="100%" position="relative">
                <img src={slide.image} alt="" />
                <Box
                  className="overflay"
                  position="absolute"
                  sx={{
                    inset: 0,
                    background:
                      'linear-gradient(rgb(255 255 255 / 0%) 0%, rgb(22 28 36 / 80%) 80%)',
                  }}
                  zIndex={1}
                ></Box>

                <Stack
                  position="absolute"
                  className="slide-info"
                  gap={1}
                  p={3}
                  zIndex={2}
                  sx={{ inset: 0, top: 'unset' }}
                >
                  <Typography
                    color={(theme) => theme.palette.success.main}
                    textTransform="uppercase"
                    fontSize={12}
                    fontWeight={700}
                    fontFamily="var(--font-raleway)"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0.7"
                    data-swiper-parallax-duration="500"
                  >
                    featured app
                  </Typography>
                  <Typography
                    color="white"
                    fontWeight={600}
                    fontSize={18}
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0.5"
                    data-swiper-parallax-duration="700"
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color="white"
                    fontSize={14}
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-duration="900"
                  >
                    {slide.description}
                  </Typography>
                </Stack>
              </Box>
            )}
          </SwiperSlide>
        ))}
        <MPagination length={DATA.length} activeSlideIndex={activeSlideIndex} />
        <MNavigation />
      </Swiper>
      {/* <Stack
          top={16}
          left={16}
          position="absolute"
          direction="row"
          component="ul"
          zIndex={1}
        >
          {DATA.map((sl, i) => (
            <li
              key={sl.id}
              className={classNames(
                activeSlideIndex === i && "active",
                "slide-pagination"
              )}
            >
              <Typography
                height={8}
                width={8}
                borderRadius="50%"
                component="span"
                display="inline-block"
                onClick={onPaginate(i)}
                sx={{ cursor: "pointer" }}
              ></Typography>
            </li>
          ))}
        </Stack> */}
    </Paper>
  );
  //#endregion
};

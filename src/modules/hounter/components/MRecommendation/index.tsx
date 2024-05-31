import { useCallback, useMemo, useRef, useState } from 'react';

import { ChevronLeft, ChevronRight, HomeWork } from '@mui/icons-material';
import { Box, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperInstance } from '@/types/swiper';

import { MSessionTitle } from '../MSessionTitle';

import { TYPES_FILTER } from './constants';
import { MHouseItem } from './MHouseItem';
import { DATA } from './mocks';
import { FilterTypeButton, PaginationButton } from './styled-components';
import { TYPES_OF_APARTMENT } from './types';

import 'swiper/css';

export const MRecommendation = () => {
  //#region Data
  const swiperRef = useRef<SwiperInstance | null>(null);
  console.log('🚀 ~ MRecommendation ~ swiperRef:', swiperRef);
  const [cantAction, setCantAction] = useState<'prev' | 'next' | 'none'>(
    'prev',
  );

  const [currentType, setCurrentType] = useState<TYPES_OF_APARTMENT | 'All'>(
    'All',
  );

  const viewData = useMemo(
    () =>
      currentType === 'All'
        ? DATA
        : DATA.filter((e) => e.type_of_apartment === currentType),
    [currentType],
  );
  //#endregion

  //#region Event
  const onSwiper = useCallback(
    (swiper: SwiperInstance) => (swiperRef.current = swiper),
    [],
  );

  const onTypeChange = (newType: TYPES_OF_APARTMENT | 'All') => () => {
    setCurrentType(newType);
  };

  const onPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const onNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSlideChange = (swiper: SwiperInstance) => {
    if (swiper.isBeginning) setCantAction('prev');
    else if (swiper.isEnd) setCantAction('next');
    else if (cantAction !== 'none') setCantAction('none');
  };
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="row" mt={3} alignItems="center" gap={12}>
        <MSessionTitle
          sessionName="Our Recommendation"
          title="Featured House"
        />
        <Stack direction="row" alignItems="center" gap={2}>
          <FilterTypeButton
            selected={currentType === 'All'}
            onClick={onTypeChange('All')}
          >
            <ListItemIcon>
              <HomeWork />
            </ListItemIcon>
            <ListItemText>All</ListItemText>
          </FilterTypeButton>
          {TYPES_FILTER.map((e) => (
            <FilterTypeButton
              key={e.value}
              selected={currentType === e.value}
              onClick={onTypeChange(e.value)}
            >
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText>{e.label}</ListItemText>
            </FilterTypeButton>
          ))}
        </Stack>
        <Stack direction="row" gap="10px">
          <PaginationButton onClick={onPrev} disabled={cantAction === 'prev'}>
            <ChevronLeft />
          </PaginationButton>
          <PaginationButton onClick={onNext} disabled={cantAction === 'next'}>
            <ChevronRight />
          </PaginationButton>
        </Stack>
      </Stack>

      <Box mt={3}>
        <Swiper
          onSwiper={onSwiper}
          slidesPerView={4}
          spaceBetween={40}
          grabCursor
          onSlideChange={onSlideChange}
        >
          {viewData.map((house) => (
            <SwiperSlide key={house.id}>
              <MHouseItem data={house} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
  //#endregion
};

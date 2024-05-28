import { useMemo, useState } from 'react';

import { HomeWork } from '@mui/icons-material';
import { Box, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MSessionTitle } from '../MSessionTitle';

import { TYPES_FILTER } from './constants';
import { MHouseItem } from './MHouseItem';
import { DATA } from './mocks';
import { FilterTypeButton } from './styled-components';
import { TYPES_OF_APARTMENT } from './types';

import 'swiper/css';

export const MRecommendation = () => {
  //#region Data
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
  const onTypeChange = (newType: TYPES_OF_APARTMENT | 'All') => () => {
    setCurrentType(newType);
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
      </Stack>

      <Box mt={3}>
        <Swiper slidesPerView={4} spaceBetween={40} grabCursor>
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

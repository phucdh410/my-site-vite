import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { IconButton, Stack, styled } from '@mui/material';
import { useSwiper } from 'swiper/react';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'currentcolor',
  opacity: 0.68,
  '&:hover': { opacity: 1 },
}));

export const MNavigation = () => {
  //#region Data
  const swiper = useSwiper();
  //#endregion

  //#region Event
  const onNavSlide = (key: 'prev' | 'next') => () => {
    if (key === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };
  //#endregion

  //#region Render
  return (
    <Stack
      top={6}
      right={8}
      position="absolute"
      direction="row"
      component="ul"
      zIndex={1}
      color="white"
    >
      <StyledIconButton size="small" onClick={onNavSlide('prev')}>
        <NavigateBefore />
      </StyledIconButton>

      <StyledIconButton size="small" onClick={onNavSlide('next')}>
        <NavigateNext />
      </StyledIconButton>
    </Stack>
  );

  //#endregion
};

import { Stack, Typography } from '@mui/material';
import classNames from 'classnames';
import { useSwiper } from 'swiper/react';

export const MPagination = ({
  length,
  activeSlideIndex,
}: {
  length: number;
  activeSlideIndex: number;
}) => {
  //#region Data
  const swiper = useSwiper();
  //#endregion

  //#region Event
  const onPaginate = (newIndex: number) => () => {
    swiper.slideTo(newIndex, 750);
  };
  //#endregion

  //#region Render
  return (
    <Stack
      top={16}
      left={16}
      position="absolute"
      direction="row"
      component="ul"
      zIndex={1}
    >
      {Array(length)
        .fill('')
        .map((sl, i) => (
          <li
            key={i}
            className={classNames(
              activeSlideIndex === i && 'active',
              'slide-pagination',
            )}
          >
            <Typography
              height={8}
              width={8}
              borderRadius="50%"
              component="span"
              display="inline-block"
              onClick={onPaginate(i)}
              sx={{ cursor: 'pointer' }}
            ></Typography>
          </li>
        ))}
    </Stack>
  );
  //#endregion
};

import { useCallback, useState } from 'react';

import { Home, Wallet, Whatshot } from '@mui/icons-material';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

import { TagChip } from '../styled-components';
import { TAGS_OF_APARTMENT } from '../types';

import { IMHouseItemProps } from './types';

export const MHouseItem = ({ data }: IMHouseItemProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  //#region Event
  const renderTag = useCallback((tag: TAGS_OF_APARTMENT) => {
    switch (tag) {
      case TAGS_OF_APARTMENT.Popular:
        return (
          <TagChip
            icon={<Whatshot />}
            label="Popular"
            tag={TAGS_OF_APARTMENT.Popular}
          />
        );
      case TAGS_OF_APARTMENT.New:
        return (
          <TagChip
            icon={<Home />}
            label="New House"
            tag={TAGS_OF_APARTMENT.New}
          />
        );
      default:
        return (
          <TagChip
            icon={<Wallet />}
            label="Best Deals"
            tag={TAGS_OF_APARTMENT.Deal}
          />
        );
    }
  }, []);

  const onImgLoaded = () => setImgLoaded(true);
  //#endregion

  //#region Render
  return (
    <Stack>
      <Box
        position="relative"
        borderRadius={6}
        overflow="hidden"
        sx={{ aspectRatio: '1/1' }}
      >
        {renderTag(data.tag)}
        {!imgLoaded && (
          <Skeleton
            height="100%"
            width="100%"
            sx={{ position: 'absolute', transform: 'unset' }}
          />
        )}
        <img
          src={data.image}
          alt=""
          onLoad={onImgLoaded}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            display: imgLoaded ? 'block' : 'none',
          }}
        />
      </Box>
      <Typography mt={2.5} fontSize={24} fontWeight={500} color="#0E1735">
        {data.name}
      </Typography>
      <Typography
        mt={1}
        fontWeight={500}
        fontSize={20}
        color="#3C4563"
      >{`$ ${data.price.toLocaleString('en-US').replace(/,/gi, '.')}`}</Typography>
      <Stack mt={2.5} direction="row" gap={2} alignItems="center">
        <Box
          position="relative"
          sx={{
            aspectRatio: '1/1',
            width: 40,
            overflow: 'hidden',
            borderRadius: '100%',
          }}
        >
          <img
            src={data.owner.avatar}
            alt={data.owner.name}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}
          />
        </Box>
        <Stack>
          <Typography fontWeight={500} fontSize={18} color="#0E1735">
            {data.owner.name}
          </Typography>
          <Typography fontWeight={500} fontSize={14} color="#888B97">
            {data.owner.address}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
  //#endregion
};

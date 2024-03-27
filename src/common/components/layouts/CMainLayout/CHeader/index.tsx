import { Box, Stack } from '@mui/material';

import { HEADER_HEIGHT } from '@/common/constants/layout-size';

import { CSearchBar } from './CSearchBar';
import { CToolbar } from './CToolbar';

export const CHeader = () => {
  return (
    <Box
      height={HEADER_HEIGHT}
      bgcolor="white"
      zIndex={1}
      boxShadow="0 1px 10px 0px rgb(0 0 0 / 10%)"
    >
      <Stack
        height="100%"
        direction="row"
        flexShrink={0}
        px={3}
        py={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <CSearchBar />

        <CToolbar />
      </Stack>
    </Box>
  );
};

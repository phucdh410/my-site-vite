import { Box, Stack, Typography } from '@mui/material';

import { HEADER_HEIGHT } from '@/constants/layout-size';

import { CNavigation } from './CNavigation';
import { CNavigationMini } from './CNavigationMini';
import { CDrawer } from './StyledComponents';

export const CSidebar = ({ open }: { open: boolean }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <CDrawer variant="permanent" open={open}>
      <Box height={HEADER_HEIGHT} p={1}>
        <Stack direction="row" alignItems="center" gap={1.25}>
          <Box
            flexShrink={0}
            position="relative"
            width={open ? 85 : 70}
            sx={{ aspectRatio: '559/447', transition: '250ms all linear' }}
          >
            <img
              src="/assets/images/mysite-logo.png"
              alt="My site logo"
              style={{
                position: 'absolute',
                inset: 0,
              }}
            />
          </Box>
          <Typography
            fontSize="2.5rem"
            fontFamily="var(--font-honk)"
            sx={{ userSelect: 'none' }}
          >
            ĐHP.410
          </Typography>
        </Stack>
      </Box>

      {open ? <CNavigation /> : <CNavigationMini />}
    </CDrawer>
  );
  //#endregion
};

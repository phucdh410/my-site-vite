import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

import { useAuthCheck } from '@/utils/hooks';

import { CSmoothScrollbar } from '../..';

import { CHeader } from './CHeader';
import { CSidebar } from './CSidebar';
import { ToggleSidebarButton } from './StyledComponents';

const CMainLayout = () => {
  useAuthCheck();

  //#region Data
  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  //#region Event
  const toggleSidebar = () => setOpen(!open);
  //#endregion

  //#region Render
  return (
    <Stack direction="row" flex={1} position="relative">
      <ToggleSidebarButton onClick={toggleSidebar} size="small" open={open}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </ToggleSidebarButton>

      <CSidebar open={open} />

      <Stack maxHeight="100vh" position="relative" flex={1} overflow="hidden">
        <CHeader />

        <CSmoothScrollbar>
          <Box
            flex={1}
            px={2}
            pt={2}
            overflow="auto"
            className="main-content-wrapper"
          >
            <Outlet />
          </Box>
        </CSmoothScrollbar>
      </Stack>
    </Stack>
  );
  //#endregion
};

export default CMainLayout;

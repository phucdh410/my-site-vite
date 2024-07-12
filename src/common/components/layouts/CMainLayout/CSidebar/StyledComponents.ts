import type { Theme } from '@mui/material';
import { CSSObject, Drawer, styled } from '@mui/material';

import { SIDEBAR_FULL, SIDEBAR_MINI } from '@/common/constants/layout-size';

//#region Drawer
const styleIn = (theme: Theme): CSSObject => ({
  width: SIDEBAR_FULL,
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});
const styleOut = (theme: Theme): CSSObject => ({
  width: SIDEBAR_MINI,
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

export const CDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  ...(open ? { ...styleIn(theme) } : { ...styleOut(theme) }),

  '.MuiPaper-root.MuiDrawer-paper': {
    boxShadow: '2px 0 6px 2px rgb(0 0 0 / 3%)',
    borderRight: 'none',

    ...(open ? { ...styleIn(theme) } : { ...styleOut(theme) }),
  },
}));
//#endregion

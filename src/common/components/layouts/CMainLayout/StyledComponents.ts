import { CSSObject, IconButton, styled } from '@mui/material';

import { SIDEBAR_FULL, SIDEBAR_MINI } from '@/constants/layout-size';

//#region Toggle Button
interface IStyledToggleButton {
  open?: boolean;
}

export const ToggleSidebarButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IStyledToggleButton>(
  ({ theme, open }): CSSObject => ({
    position: 'absolute',
    top: 67,
    '.MuiSvgIcon-root': {
      width: 16,
      height: 16,
    },
    left: open ? SIDEBAR_FULL - 14 : SIDEBAR_MINI - 14, // Lấy width của icon button trên UI chia 2 => 8
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 18%))',
    '&:hover': {
      backgroundColor: 'rgb(244 238 255)',
    },
    ...(open
      ? {
          transition: theme.transitions.create(['left', 'background-color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }
      : {
          transition: theme.transitions.create(['left'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }),
  }),
);
//#endregion

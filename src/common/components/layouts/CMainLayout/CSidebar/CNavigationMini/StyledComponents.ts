import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';

//#region Sidebar Item Collapse
interface IButton {
  to?: string;
}

export const CSidebarItemMobile = styled(ListItemButton)<IButton>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    fontWeight: 700,
    fontSize: 10,
    color: 'rgb(99, 115, 129)',
    backgroundColor: 'transparent',
    minHeight: 56,
    lineHeight: '16px',
    borderRadius: '6px',
    overflow: 'hidden',
    '&.Mui-selected': {
      color: 'rgb(0, 167, 111)',
      backgroundColor: 'rgba(0, 167, 111, 0.08)',
    },
  }),
);

export const CSidebarItemIconMobile = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 'unset',
  height: '22px',
  width: '22px',
  color: 'inherit',
  position: 'relative',
  '.MuiSvgIcon-root': {
    color: 'inherit',
    height: 'inherit',
    width: 'inherit',
  },
  '.chevron-icon': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-100%',
    height: 20,
    width: 20,
  },
}));

export const CSidebarItemTextMobile = styled(ListItemText)(({ theme }) => ({
  overflow: 'hidden',
  maxWidth: '100%',
  '.MuiTypography-root': {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
  },
}));

export const CSidebarSubItemMobile = styled(ListItemButton)<IButton>(
  ({ theme }) => ({
    padding: '0 8px',
    fontSize: 14,
    fontWeight: 600,
    minHeight: 34,
    borderRadius: '6px',
    justifyContent: 'start',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#637381',
    '&:hover': {
      backgroundColor: 'rgb(0 0 0 / 4%)',
      boxShadow: 'none',
    },
    '&.Mui-selected': {
      color: 'rgb(0, 167, 111)',
      backgroundColor: 'rgba(0, 167, 111, 0.08)',
    },
  }),
);
//#endregion

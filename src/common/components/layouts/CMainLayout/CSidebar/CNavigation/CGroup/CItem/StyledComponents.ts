import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';

//#region Sidebar Item
interface IButton {
  to?: string;
}

export const CSidebarItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'divider',
})<IButton>(({ theme, divider: sub }) => ({
  borderRadius: '8px',
  color: 'rgb(99, 115, 129)',
  padding: '4px 8px 4px 12px',
  minHeight: sub ? 36 : 44,
  '&.Mui-selected': {
    color: theme.palette.sidebar_item_selected.main,
    backgroundColor: theme.palette.sidebar_item_background_selected.main,
    '&:hover': {
      backgroundColor: 'rgba(0, 167, 111, 0.16)',
    },
    '.MuiListItemIcon-root': {
      color: 'currentColor',
      'svg.sidebar-icon': {
        color: 'currentColor',
      },
    },
    '.MuiListItemText-root .MuiTypography-root': {
      fontWeight: 600,
    },
  },
}));
export const CSidebarItemIcon = styled(ListItemIcon)(({ theme }) => ({
  marginRight: '16px',
  minWidth: 'unset',
  flexShrink: 0,
  height: 24,
  width: 24,
  alignItems: 'center',
  justifyContent: 'center',
  '.sidebar-icon': {
    width: '100%',
  },
}));
export const CSidebarItemText = styled(ListItemText)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  '.MuiTypography-root': {
    fontFamily: 'var(--font-public-sans)',
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
//#endregion

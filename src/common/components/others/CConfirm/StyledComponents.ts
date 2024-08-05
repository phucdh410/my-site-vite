import { Button, Dialog, styled } from '@mui/material';

export const ConfirmDialog = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    minWidth: 400,
    borderRadius: '14px',
    overflow: 'hidden',
  },
}));

interface IActionButton {
  role?: 'ok' | 'cancel';
}

export const ActionButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'role',
})<IActionButton>(({ theme, role }) => ({
  boxShadow: 'none!important',
  outline: 'none!important',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 18,
  minWidth: 90,
  flexBasis: '50%',
  flexGrow: 1,
  height: '55px',
  ...(role === 'cancel' &&
    {
      // background: 'gray',
    }),
  ...(role === 'ok' &&
    {
      // background: theme.palette.success.main,
    }),
}));

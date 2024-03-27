import { Menu, styled } from '@mui/material';

export const ContextMenu = styled(Menu)(({ theme }) => ({
  fontFamily: 'var(--font-quicksand)',
  '.MuiPaper-root': {
    borderRadius: '20px',
    minWidth: 200,
    backgroundImage: 'linear-gradient(to bottom right, #c9ffbf42, #ffafbd4a)',
    boxShadow: 'rgb(0 57 255 / 24%) 0px 3px 8px',
  },
  '.MuiMenuItem-root': {
    fontFamily: 'inherit',
    fontWeight: 500,
    '+.MuiDivider-root': {
      marginBlock: '4px',
    },
  },
}));

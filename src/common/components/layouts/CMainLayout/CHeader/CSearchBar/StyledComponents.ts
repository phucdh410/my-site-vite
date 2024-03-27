import { styled, TextField } from '@mui/material';

//#region Search Bar
export const CSearchBarField = styled(TextField)(({ theme }) => ({
  '.MuiOutlinedInput-root': {
    fontFamily: 'var(--font-raleway)',
    borderRadius: '12px',
    width: 200,
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),

    '&.Mui-focused': {
      width: 600,
    },

    '.MuiOutlinedInput-input': {
      paddingBlock: '10px',

      '&::placeholder': {
        color: '#333333',
        fontWeight: 700,
      },
    },
  },

  '.MuiOutlinedInput-notchedOutline': {},
}));
//#endregion

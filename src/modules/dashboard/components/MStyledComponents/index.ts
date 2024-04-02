import { Button, styled } from '@mui/material';

export const MCheckNowButton = styled(Button)(() => ({
  fontWeight: 700,
  fontFamily: 'var(--font-public-sans)',
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '0.875rem',
  color: 'white',
  backgroundColor: 'rgb(0, 167, 111)',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'rgba(0, 167, 111, 0.24) 0px 8px 16px 0px',
    backgroundColor: 'rgb(0, 120, 103)',
  },
}));

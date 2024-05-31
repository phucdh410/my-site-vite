import { Chip, IconButton, ListItemButton, styled } from '@mui/material';

import { TAGS_OF_APARTMENT } from '../types';
export const FilterTypeButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '32px',
  padding: '12px 24px',
  backgroundColor: 'white',
  border: '1px solid #E0E3EB',
  color: '#888B97',
  '.MuiListItemIcon-root': {
    minWidth: 'unset',
    marginRight: '8px',
    color: 'inherit',
  },
  '.MuiListItemText-root .MuiTypography-root': {
    fontWeight: 500,
    color: 'inherit',
  },

  '&.Mui-selected': {
    border: 'none',
    backgroundColor: '#D1FAE5',
    color: '#10B981',
  },
}));

interface CustomProps {
  tag: TAGS_OF_APARTMENT;
}

export const TagChip = styled(Chip, {
  shouldForwardProp: (props) => props !== 'tag',
})<CustomProps>(({ theme, tag }) => ({
  '.MuiSvgIcon-root': {
    color: 'inherit!important',
  },
  position: 'absolute',
  zIndex: 1,
  bottom: 14,
  left: 14,
  fontWeight: 600,
  backgroundColor:
    tag === TAGS_OF_APARTMENT.Popular
      ? '#FEE2E2'
      : tag === TAGS_OF_APARTMENT.New
        ? '#DBEAFE'
        : '#D1FAE5',
  color:
    tag === TAGS_OF_APARTMENT.Popular
      ? '#EF4444'
      : tag === TAGS_OF_APARTMENT.New
        ? '#1D4ED8'
        : '#047857',
  paddingInline: '8px',
}));

export const PaginationButton = styled(IconButton)(({ theme }) => ({
  width: '50px',
  borderRadius: '100px',
  backgroundColor: '#10B981',
  color: 'white',
  '&:hover': {
    backgroundColor: '#0BBB80',
  },

  '&.Mui-disabled': {
    backgroundColor: '#E0E0E0',
  },
}));

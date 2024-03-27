import { Search } from '@mui/icons-material';
import { InputAdornment, Stack, Typography } from '@mui/material';

import { SEARCH_TEXT } from '@/common/constants/search-text';

import { CSearchBarField } from './StyledComponents';

export const CSearchBar = () => {
  return (
    <CSearchBarField
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Stack
              px={0.75}
              py={0.5}
              borderRadius="8px"
              bgcolor="rgb(128 128 128 / 20%)"
              alignItems="center"
              justifyContent="center"
            >
              <Typography fontWeight={700} fontSize={12} component="span">
                {SEARCH_TEXT}
              </Typography>
            </Stack>
          </InputAdornment>
        ),
      }}
    />
  );
};

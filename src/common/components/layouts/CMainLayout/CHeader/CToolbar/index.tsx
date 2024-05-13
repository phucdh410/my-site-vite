import { Group, Notifications, Settings } from '@mui/icons-material';
import { Avatar, ButtonBase, IconButton, Stack } from '@mui/material';

import { AVATAR_IMAGES } from '@/constants/options';
import { logoutFunc } from '@/utils/axios/functions';

export const CToolbar = () => {
  return (
    <Stack direction="row" alignItems="center" gap={1.25}>
      <IconButton>
        <Notifications />
      </IconButton>
      <IconButton>
        <Group />
      </IconButton>
      <IconButton>
        <Settings sx={{ animation: 'spin 3s linear infinite' }} />
      </IconButton>
      <ButtonBase
        onClick={logoutFunc}
        sx={{
          borderRadius: '50%',
          background: 'rgb(168 168 168 / 15%)',
          padding: '2px',
        }}
      >
        <Avatar
          variant="circular"
          sx={{ border: '2px solid white', height: 36, width: 36 }}
        >
          <img src={AVATAR_IMAGES[9]} alt="" />
        </Avatar>
      </ButtonBase>
    </Stack>
  );
};

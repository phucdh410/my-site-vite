import { Stack, Typography } from '@mui/material';

import { IMSessionTitleProps } from './types';

export const MSessionTitle = ({
  type = 1,
  sessionName,
  title,
}: IMSessionTitleProps) => {
  return type === 1 ? (
    <Stack>
      <Typography
        color="#F59E0B"
        fontWeight={500}
        fontSize={14}
        mb={1.5}
        position="relative"
        sx={{
          '&:before': {
            content: '""',
            position: 'absolute',
            left: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '32px',
            height: '1px',
            backgroundColor: '#F59E0B',
          },
        }}
      >
        {sessionName}
      </Typography>
      <Typography
        color="#1B1C57"
        fontWeight={600}
        fontSize={32}
        lineHeight="32px"
      >
        {title}
      </Typography>
    </Stack>
  ) : (
    <Stack alignItems="center">
      <Stack height="1px" width="32px" bgcolor="#F59E0B" mb={1}></Stack>
      <Typography
        color="#F59E0B"
        fontWeight={500}
        fontSize={14}
        mb={1.5}
        position="relative"
      >
        {sessionName}
      </Typography>
      <Typography
        color="#1B1C57"
        fontWeight={600}
        fontSize={32}
        lineHeight="32px"
      >
        {title}
      </Typography>
    </Stack>
  );
};

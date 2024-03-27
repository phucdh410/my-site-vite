import { forwardRef } from 'react';

import { Box, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { SnackbarContent } from 'notistack';

import { ICNoti } from '../types';

export const CNotiError = forwardRef<HTMLDivElement, ICNoti>(
  ({ time, id, message, ...props }, ref) => {
    return (
      <SnackbarContent ref={ref}>
        <Paper
          sx={{
            minWidth: 360,
            maxWidth: 380,
            borderRadius: '10px',
            background: 'linear-gradient(90deg, #ec5757, #f2984a)',
            overflow: 'hidden',
          }}
        >
          <Stack
            position="relative"
            py={2.75}
            pl={3.5}
            pr={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              position="relative"
              borderRadius="50%"
              height={65}
              width={65}
              bgcolor="#fff"
              border="2px solid #bf441d"
              boxShadow="0 4px 6px 2px rgb(0 0 0 / 12%)"
              className="emoji-noti"
            >
              <Stack
                className="emoji--eyes"
                direction="row"
                gap="14px"
                top="45%"
                left="50%"
                position="absolute"
                sx={{ transform: 'translate(-50%, -45%)' }}
              >
                <Box
                  height={8}
                  width={8}
                  borderRadius="50%"
                  sx={{
                    background: 'linear-gradient(90deg, #e93f00, #e93f0070)',
                  }}
                ></Box>
                <Box
                  height={8}
                  width={8}
                  borderRadius="50%"
                  sx={{
                    background: 'linear-gradient(90deg, #e93f00, #e93f0070)',
                  }}
                ></Box>
              </Stack>

              <Box
                className="emoji--mouth"
                position="absolute"
                left="50%"
                top="75%"
                width={18}
                height={9}
                borderRadius="20px 20px 0 0"
                border="2px solid rgb(255 106 12)"
                borderBottom={0}
                sx={{
                  transform: 'translate(-50%, -75%)',
                  background: '#fff',
                }}
              ></Box>

              <Stack
                className="emoji--cheeks"
                direction="row"
                gap="18px"
                top="65%"
                left="50%"
                position="absolute"
                sx={{ transform: 'translate(-50%, -63%)' }}
              >
                <Box
                  height={9}
                  width={9}
                  borderRadius="50%"
                  bgcolor="#ff5a001f"
                ></Box>
                <Box
                  height={9}
                  width={9}
                  borderRadius="50%"
                  bgcolor="#ff5a001f"
                ></Box>
              </Stack>
            </Box>

            <Stack
              flex={1}
              color="#fff"
              className="content-noti"
              maxWidth="60%"
            >
              <Typography
                color="inherit"
                fontSize={20}
                fontWeight={700}
                fontFamily="var(--font-quicksand)"
              >
                Oopsie!
              </Typography>
              <Typography
                color="inherit"
                fontSize={14}
                fontWeight={300}
                fontFamily="var(--font-raleway)"
                display="-webkit-box"
                overflow="hidden"
                sx={{
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {message || 'Your message failed to deliver.'}
              </Typography>
            </Stack>

            <Typography
              component="span"
              color="#fff"
              fontWeight={500}
              fontSize={12}
              className="time-noti"
              alignSelf="start"
            >
              {(time || dayjs()).format('HH:mm')}
            </Typography>

            <Box
              position="absolute"
              width={140}
              height={140}
              top="-82%"
              right="3%"
              bgcolor="#ffffff1a"
              borderRadius="50%"
            ></Box>
            <Box
              position="absolute"
              width={140}
              height={140}
              top="-60%"
              right="-15%"
              bgcolor="#ffffff1a"
              borderRadius="50%"
            ></Box>
          </Stack>
        </Paper>
      </SnackbarContent>
    );
  },
);

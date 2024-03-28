import { Controller, useForm } from 'react-hook-form';

import { Box, Button, Paper, Stack } from '@mui/material';

import { CInput, CPasswordInput } from '@/components/controls';
import { noti } from '@/funcs/noti';
import { ILoginParams } from '@/types/auth';
import { loginFunc } from '@/utils/axios/functions';
import { useAuthCheck } from '@/utils/hooks';

import { defaultValues, resolver } from '../../form';

const a = undefined;

const MLoginPage = () => {
  useAuthCheck();
  const b = a.name.age.tumlum;

  //#region Data
  const { control, handleSubmit } = useForm<ILoginParams>({
    mode: 'all',
    defaultValues,
    resolver,
  });
  //#endregion

  //#region Event
  const onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement | HTMLLabelElement>,
  ) => {
    if (event.key === 'Enter') onSubmit();
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await loginFunc(values);

        noti.success('Login thành công!');
      } catch (error: any) {
        noti.error(error?.message);
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <Box
      height="100vh"
      width="100vw"
      position="relative"
      sx={{
        '&:after': {
          height: '100%',
          width: '100%',
          position: 'absolute',
          content: '""',
          backgroundImage: "url('/assets/images/background/login.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'scaleX(-1)',
          zIndex: 1,
        },
      }}
    >
      <Stack
        position="absolute"
        top="50%"
        right="25%"
        zIndex={2}
        p={3}
        borderRadius="16px"
        sx={{
          transform: 'translate(25%, -50%)',
          backdropFilter: 'blur(5px)',
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Paper sx={{ borderRadius: 'inherit' }}>
          <Stack px={4} py={3} spacing={2}>
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  onKeyDown={onKeyDown}
                  label="Username"
                  placeholder="Nhập username"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CPasswordInput
                  {...field}
                  onKeyDown={onKeyDown}
                  label="Password"
                  placeholder="Nhập password"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Button variant="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
  //#endregion
};

export default MLoginPage;

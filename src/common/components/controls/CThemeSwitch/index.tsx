import { useState } from 'react';

import { DarkMode, LightMode } from '@mui/icons-material';
import { Stack } from '@mui/material';

export const CThemeSwitch = () => {
  //#region Data
  const [themeColor, setThemeColor] = useState<'light' | 'dark'>('light');
  //#endregion

  //#region Event
  const onSwitchTheme = () => {
    if (themeColor === 'light') setThemeColor('dark');
    else setThemeColor('light');
  };
  //#endregion

  //#region Render
  return (
    <Stack
      height={36}
      width={85}
      p={0.5}
      borderRadius="20px"
      boxShadow="0 0 2px 3px rgb(0 0 0 / 20%)"
      onClick={onSwitchTheme}
      sx={{
        backgroundImage: `url('/assets/images/others/${themeColor}.jpg')`,
        backgroundOrigin: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 350ms ease-in-out',
        cursor: 'pointer',
      }}
    >
      <Stack
        className="theme-thumb"
        id="theme-thumb"
        borderRadius="100%"
        height={28}
        width={28}
        bgcolor="white"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: 'rgb(255 255 255 / 60%)',
          transform: `translateX(${themeColor === 'light' ? 0 : 49}px)`,
          transition: 'all 350ms ease-in-out',
        }}
      >
        {themeColor === 'light' ? (
          <LightMode htmlColor="#ffad6a" />
        ) : (
          <DarkMode htmlColor="#000f84" />
        )}
      </Stack>
    </Stack>
  );
  //#endregion
};

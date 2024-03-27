import { forwardRef, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import classNames from 'classnames';

import { ICPasswordInputProps, ICPasswordInputRef } from './types';

export const CPasswordInput = forwardRef<
  ICPasswordInputRef,
  ICPasswordInputProps
>(
  (
    { helperText, error, className, InputProps, iconSize = 'small', ...props },
    ref,
  ) => {
    //#region Data
    const [visible, setVisible] = useState<boolean>(false);
    //#endregion

    //#region Event
    const onToggle = () => setVisible(!visible);
    //#endregion

    //#region Render
    return (
      <TextField
        {...props}
        type={visible ? 'text' : 'password'}
        className={classNames('c-input password', className)}
        inputRef={ref}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size={iconSize} onClick={onToggle}>
                {visible ? (
                  <VisibilityOff fontSize={iconSize} />
                ) : (
                  <Visibility fontSize={iconSize} />
                )}
              </IconButton>
            </InputAdornment>
          ),
          ...InputProps,
        }}
      />
    );
    //#endregion
  },
);

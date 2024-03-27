import { forwardRef } from 'react';

import { TextField } from '@mui/material';
import classNames from 'classnames';

import { ICInputProps, ICInputRef } from './types';

export const CInput = forwardRef<ICInputRef, ICInputProps>(
  ({ helperText, error, className, InputProps, ...props }, ref) => {
    return (
      <TextField
        {...props}
        className={classNames('c-input', className)}
        inputRef={ref}
        error={error}
        helperText={helperText}
        InputProps={{
          ...InputProps,
        }}
      />
    );
  },
);

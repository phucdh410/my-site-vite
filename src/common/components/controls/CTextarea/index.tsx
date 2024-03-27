import { forwardRef } from 'react';

import { TextField } from '@mui/material';
import classNames from 'classnames';

import { ICTextareaProps, ICTextareaRef } from './types';

export const CTextarea = forwardRef<ICTextareaRef, ICTextareaProps>(
  ({ helperText, error, className, rows = 4, ...props }, ref) => {
    return (
      <TextField
        {...props}
        multiline
        rows={rows}
        className={classNames('c-input textarea', className)}
        inputRef={ref}
        error={error}
        helperText={helperText}
      />
    );
  },
);

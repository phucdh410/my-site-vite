import { forwardRef, useCallback, useState } from 'react';

import { Search } from '@mui/icons-material';
import { debounce, InputAdornment, TextField } from '@mui/material';
import classNames from 'classnames';

import { ICSearchInputProps, ICSearchInputRef } from './types';

export const CSearchInput = forwardRef<ICSearchInputRef, ICSearchInputProps>(
  (
    { helperText, error, className, InputProps, loading, onChange, ...props },
    ref,
  ) => {
    //#region Data
    const [input, setInput] = useState<string>('');
    //#endregion

    //#region event_business
    const debounceSearch = useCallback(
      debounce((newValue: string) => {
        onChange && onChange(newValue);
      }, 400),
      [],
    );

    const onInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setInput(e.target.value);
      debounceSearch(e.target.value);
    };
    //#endregion

    //#region Render
    return (
      <TextField
        {...props}
        value={input}
        onChange={onInputChange}
        className={classNames('c-input search', className)}
        inputRef={ref}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search
                className={classNames(loading && 'searching', 'search-icon')}
              />
            </InputAdornment>
          ),
          ...InputProps,
        }}
      />
    );
    //#endregion
  },
);

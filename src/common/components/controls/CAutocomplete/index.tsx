import { forwardRef } from 'react';

import {
  Autocomplete,
  AutocompleteChangeReason,
  Box,
  TextField,
} from '@mui/material';
import classNames from 'classnames';

import { IAutocompleteOption } from '@/types/form';

import { ICAutocompleteProps, ICAutocompleteRef } from './types';

export const CAutocomplete = forwardRef<ICAutocompleteRef, ICAutocompleteProps>(
  (
    {
      label,
      placeholder,
      className,
      value,
      onChange,
      onBlur,
      options,
      disableClearable = true,
      error,
      helperText,
      ...props
    },
    ref,
  ) => {
    //#region Data
    //#endregion

    //#region Event
    const onOptionChange = (
      event: React.SyntheticEvent<Element, Event>,
      value: IAutocompleteOption | null,
      reason: AutocompleteChangeReason,
    ) => {
      if (value) onChange?.(value?.id);
    };

    const getOptionLabel = (option: IAutocompleteOption) => {
      return option?.label;
    };
    //#endregion

    //#region Render
    return (
      <Autocomplete
        {...props}
        className={classNames('c-autocomplete', className)}
        disableClearable={disableClearable}
        options={options}
        onChange={onOptionChange}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            onBlur={onBlur}
            inputRef={ref}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option?.id}>
            {option?.label}
          </Box>
        )}
      />
    );
    //#endregion
  },
);

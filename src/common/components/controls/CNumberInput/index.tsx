import { forwardRef, useMemo } from 'react';

import { TextField, Tooltip } from '@mui/material';
import classNames from 'classnames';

import { NUMBER_INPUT_REGEX } from '@/constants/regex';

import { ICNumberInputProps, ICNumberInputRef } from './types';

export const CNumberInput = forwardRef<ICNumberInputRef, ICNumberInputProps>(
  (
    {
      helperText,
      error,
      className,
      InputProps,
      inputMode = 'numeric',
      min,
      max,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    //#region Data
    const displayValue = useMemo(() => value?.toLocaleString() || '', [value]);
    //#endregion

    //#region Event
    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!event.key.match(NUMBER_INPUT_REGEX)) {
        event.preventDefault();
      }
    };

    const onBlur = (
      event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    ) => {
      const _value = Number(event.target.value);

      if (max && _value > max) {
        onChange?.(max);
      }
      if (min && _value < min) {
        onChange?.(min);
      }
    };

    const onInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      let _value: string | number = event.target.value;

      if (typeof _value === 'string') {
        _value = _value.replace(/\D/g, '');
        _value = Number(_value);
      }

      if (max && _value > max) {
        return onChange?.(max);
      }

      // if (min && _value < min) {
      //   return onChange?.(min);
      // }

      return onChange?.(_value);
    };
    //#endregion

    //#region Render
    return (
      <Tooltip
        placement="top"
        title={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {min && <span>MIN: {min}</span>}
            {max && <span>MAX: {max}</span>}
          </div>
        }
      >
        <TextField
          {...props}
          type="number"
          className={classNames('c-input', className)}
          inputRef={ref}
          error={error}
          helperText={helperText}
          value={displayValue}
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          onBlur={onBlur}
          inputProps={{
            inputMode,
            min,
            max,
          }}
          InputProps={{
            ...InputProps,
          }}
        />
      </Tooltip>
    );
    //#endregion
  },
);

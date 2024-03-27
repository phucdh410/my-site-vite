import { forwardRef } from 'react';

import classNames from 'classnames';

import { ICCheckboxProps, ICCheckboxRef } from './types';

import './styles.scss';

export const CCheckbox = forwardRef<ICCheckboxRef, ICCheckboxProps>(
  ({ value, onChange, className, label, ...props }, ref) => {
    //#region Render
    return (
      <label className={classNames('c-checkbox', className)}>
        <input value={value} onChange={onChange} type="checkbox" />
        <svg viewBox="0 0 21 21">
          <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
        </svg>
        {label && <span>{label}</span>}
      </label>
    );
    //#endregion
  },
);

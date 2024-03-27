import { ICommonCInputProps, IFormInputComponentRef } from '@/types/form';

export interface ICNumberInputRef extends IFormInputComponentRef {}

export interface ICNumberInputProps extends ICommonCInputProps {
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;
  min?: number;
  max?: number;
}

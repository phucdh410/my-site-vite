import { InputProps } from '@mui/material';

export interface IFormInputComponentRef {
  blur: () => void;
  focus: () => void;
}

export interface IFormInputComponentProps<T = any> {
  id?: string;
  name?: string;
  className?: string;
  value?: T | null;
  label?: string;
  onChange?: (value: T) => void;
  onBlur?: () => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLDivElement | HTMLLabelElement>,
  ) => void;
}

export interface ICommonCInputProps extends IFormInputComponentProps {
  placeholder?: string;
  InputProps?: InputProps;
}

export interface IAutocompleteOption {
  id: string | number;
  label: string;
  [key: string]: any;
}

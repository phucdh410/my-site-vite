import {
  IAutocompleteOption,
  IFormInputComponentProps,
  IFormInputComponentRef,
} from '@/types/form';

export interface ICAutocompleteRef extends IFormInputComponentRef {}

export interface ICAutocompleteProps extends IFormInputComponentProps {
  options: IAutocompleteOption[];
  placeholder?: string;
  disableClearable?: boolean;
}

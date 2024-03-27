import { ICommonCInputProps, IFormInputComponentRef } from '@/types/form';

export interface ICSearchInputRef extends IFormInputComponentRef {}

export interface ICSearchInputProps extends ICommonCInputProps {
  loading?: boolean;
}

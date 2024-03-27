import { ICommonCInputProps, IFormInputComponentRef } from '@/types/form';

export interface ICPasswordInputRef extends IFormInputComponentRef {}

export interface ICPasswordInputProps extends ICommonCInputProps {
  iconSize?: 'small' | 'medium' | 'large';
}

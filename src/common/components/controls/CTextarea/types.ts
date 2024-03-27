import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICTextareaRef extends IFormInputComponentRef {}

export interface ICTextareaProps extends IFormInputComponentProps {
  rows?: number;
}

import { ReactNode } from 'react';

export interface IBaseItem {
  id: string;
}

export interface ICHoneycomb<T extends IBaseItem> {
  defaultWidth?: number;
  gap?: number;
  size: number;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

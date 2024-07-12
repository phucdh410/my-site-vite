import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = title;
    }
  }, []);
};

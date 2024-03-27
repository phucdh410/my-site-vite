import { PropsWithChildren, useEffect } from 'react';

import Scrollbar from 'smooth-scrollbar';

import './styles.scss';

export const CSmoothScrollbar: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const scrollWrappers = document.getElementsByClassName('scrollbar-wrapper');

    for (let i = 0; i < scrollWrappers.length; i++) {
      Scrollbar.init(scrollWrappers[i] as HTMLElement, {
        damping: 0.07,
      });
    }
  }, []);

  return <div className="scrollbar-wrapper">{children}</div>;
};

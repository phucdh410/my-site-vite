import { createElement, lazy, Suspense } from 'react';

import { CPageLoader } from '@/components/others';

export function asyncLayout(factory: () => Promise<{ default: any }>) {
  const Layout = lazy(factory);

  return createElement(
    Suspense,
    {
      fallback: createElement(CPageLoader),
    },
    createElement(Layout),
  );
}

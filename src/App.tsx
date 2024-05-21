import { useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CContextMenu, CNotiProvider } from '@/components/others';

import { SoundProviderContext } from './utils/hooks/sound';
import { routes } from './routes';

function App() {
  //#region Data
  const router = useMemo(() => createBrowserRouter(routes), []);

  const [audio] = useState(new Audio());
  //#endregion

  //#region Render
  return (
    <>
      <SoundProviderContext.Provider value={{ audio }}>
        <RouterProvider router={router} />
      </SoundProviderContext.Provider>

      <CContextMenu />
      <CNotiProvider />
    </>
  );
  //#endregion
}

export default App;

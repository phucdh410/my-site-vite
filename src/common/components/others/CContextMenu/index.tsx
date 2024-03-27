import { useEffect, useState } from 'react';

import { Divider, MenuItem, Zoom } from '@mui/material';

import { ContextMenu } from './StyledComponents';
import { IContextPosition } from './types';

export const CContextMenu = () => {
  //#region Data
  const [contextPos, setContextPos] = useState<IContextPosition | null>(null);
  //#endregion

  //#region Event
  const onClose = () => {
    setContextPos(null);
  };
  //#endregion

  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      const x = event.clientX;
      const y = event.clientY;

      setContextPos(contextPos === null ? { x, y } : null);

      setTimeout(() => {
        setContextPos({ x, y });
      }, 150);
    };

    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.addEventListener('contextmenu', onContextMenu);
    }

    return () => {
      rootElement?.removeEventListener('contextmenu', onContextMenu);
    };
  }, []);

  // useImperativeHandle(ref, () => ({
  //   updatePos: (x, y) => {
  //     setContextPos(contextPos === null ? { x, y } : null);

  //     setTimeout(() => {
  //       setContextPos({ x, y });
  //     }, 150);
  //   },
  //   clearPos: () => {
  //     setContextPos(null);
  //   },
  // }));

  //#region Render
  return (
    <ContextMenu
      onClose={onClose}
      autoFocus={false}
      TransitionComponent={Zoom}
      anchorReference="anchorPosition"
      open={contextPos !== null}
      anchorPosition={
        contextPos !== null
          ? { top: contextPos.y, left: contextPos.x }
          : undefined
      }
    >
      <MenuItem onClick={onClose}>Copy</MenuItem>
      <MenuItem onClick={onClose}>Print</MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>Highlight</MenuItem>
      <MenuItem onClick={onClose}>Email</MenuItem>
    </ContextMenu>
  );
  //#endregion
};

import { useMemo } from 'react';
import { ResponsiveHoneycomb } from 'react-honeycomb';

import { Box } from '@mui/material';

import { IBaseItem, ICHoneycomb } from './types';

export const CHoneycomb = <T extends IBaseItem>({
  defaultWidth = 1024,
  size,
  items,
  gap = 5,
  renderItem,
}: ICHoneycomb<T>) => {
  //#region Data
  const ids = useMemo(() => items.map((e) => e.id), [items]);
  //#endregion

  //#region Render
  return (
    <ResponsiveHoneycomb
      defaultWidth={defaultWidth}
      size={size}
      items={ids}
      renderItem={(id, index) => (
        <Box
          sx={{
            position: 'absolute',
            inset: `${gap}px`,
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            pointerEvents: 'auto',
          }}
        >
          {renderItem(items[index], index)}
        </Box>
      )}
    />
  );
  //#endregion
};

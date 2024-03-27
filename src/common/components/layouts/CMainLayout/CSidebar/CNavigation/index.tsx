import { Stack } from '@mui/material';

import { CSmoothScrollbar } from '@/components/others';
import { SIDEBAR } from '@/constants/sidebar';

import { CGroup } from './CGroup';

export const CNavigation = () => {
  //#region Render
  return (
    <CSmoothScrollbar>
      <Stack overflow="auto">
        {SIDEBAR.map((group, index) => (
          <CGroup key={group.id} data={group} />
        ))}
      </Stack>
    </CSmoothScrollbar>
  );
  //#endregion
};

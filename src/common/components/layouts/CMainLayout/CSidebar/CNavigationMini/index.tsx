import { Stack } from '@mui/material';

import { SIDEBAR } from '@/common/constants/sidebar';

import { CListMenu } from './CListMenu';
import { CMenuItem } from './CMenuItem';

export const CNavigationMini = () => {
  return (
    <Stack direction="column" gap={0.5} mt={2} px={0.5}>
      {SIDEBAR.map((group) =>
        group.children.map((nav) =>
          nav.children && nav.children.length > 0 ? (
            <CListMenu key={nav.id} data={nav} />
          ) : (
            <CMenuItem key={nav.id} data={nav} />
          ),
        ),
      )}
    </Stack>
  );
  //#endregion
};

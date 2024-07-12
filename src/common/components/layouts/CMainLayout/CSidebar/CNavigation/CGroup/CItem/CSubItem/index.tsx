import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import { ISidebarSubItem } from '@/types/sidebar/index';

import {
  CSidebarItem,
  CSidebarItemIcon,
  CSidebarItemText,
} from '../StyledComponents';

export const CSubItem = ({
  parentSlug,
  data,
}: {
  parentSlug: string;
  data: ISidebarSubItem;
}) => {
  //#region Data
  const { pathname } = useLocation();

  const selected = useMemo(() => {
    return pathname.includes(parentSlug + data.path);
  }, [pathname, data, parentSlug]);
  //#endregion

  //#region Render
  return (
    <CSidebarItem
      selected={selected}
      LinkComponent={Link}
      to={parentSlug + data.path}
      divider
    >
      <CSidebarItemIcon>
        <Box
          height={4}
          width={4}
          borderRadius="50%"
          sx={{ backgroundColor: 'currentcolor', color: 'currentcolor' }}
        ></Box>
      </CSidebarItemIcon>
      <CSidebarItemText>{data.label}</CSidebarItemText>
    </CSidebarItem>
  );
  //#endregion
};

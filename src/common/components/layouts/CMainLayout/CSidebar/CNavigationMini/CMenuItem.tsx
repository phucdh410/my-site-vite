import { Link, useLocation } from 'react-router-dom';

import { ISidebarItem } from '@/types/sidebar/index';

import {
  CSidebarItemIconMobile,
  CSidebarItemMobile,
  CSidebarItemTextMobile,
} from './StyledComponents';

export const CMenuItem = ({ data }: { data: ISidebarItem }) => {
  //#region Data
  const { pathname } = useLocation();
  //#endregion

  //#region Render
  return (
    <CSidebarItemMobile
      key={data.id}
      selected={pathname.startsWith(data.path)}
      LinkComponent={Link}
      to={data.path}
    >
      <CSidebarItemIconMobile>{data.icon}</CSidebarItemIconMobile>
      <CSidebarItemTextMobile primary={data.label} />
    </CSidebarItemMobile>
  );
  //#endregion
};

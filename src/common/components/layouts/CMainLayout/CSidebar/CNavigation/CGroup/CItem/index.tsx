import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Collapse, Stack } from '@mui/material';
import classNames from 'classnames';

import { ISidebarItem } from '@/types/sidebar/index';

import { CSubItem } from './CSubItem';
import {
  CSidebarItem,
  CSidebarItemIcon,
  CSidebarItemText,
} from './StyledComponents';

import './styles.scss';

export const CItem = ({ data }: { data: ISidebarItem }) => {
  //#region Data
  const { pathname } = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  const selected = useMemo(() => {
    return pathname.includes(data.path);
  }, [data, pathname]);
  //#endregion

  //#region Event
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  //#endregion

  //#region Render
  return data.children ? (
    <>
      <CSidebarItem
        onClick={onToggle}
        selected={selected}
        LinkComponent={Link}
        className="sidebar-collapse-item"
      >
        <CSidebarItemIcon>{data.icon}</CSidebarItemIcon>
        <CSidebarItemText>{data.label}</CSidebarItemText>
        <KeyboardArrowDown
          className={classNames(open && 'open', 'sidebar-collapse-item--icon')}
          fontSize="small"
        />
      </CSidebarItem>

      <Collapse in={open}>
        <Stack gap={0.5}>
          {data.children.map((subItem, index) => (
            <CSubItem
              key={subItem.label + index + new Date()}
              parentSlug={data.path}
              data={subItem}
            />
          ))}
        </Stack>
      </Collapse>
    </>
  ) : (
    <Link to={data.path}>
      <CSidebarItem selected={selected} LinkComponent={Link}>
        <CSidebarItemIcon>{data.icon}</CSidebarItemIcon>
        <CSidebarItemText>{data.label}</CSidebarItemText>
      </CSidebarItem>
    </Link>
  );
  //#endregion
};

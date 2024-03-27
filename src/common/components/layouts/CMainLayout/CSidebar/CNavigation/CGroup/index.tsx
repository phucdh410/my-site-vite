import { useState } from 'react';

import { Collapse, Stack, Typography, useTheme } from '@mui/material';

import { IGroupSidebar } from '@/types/sidebar/index';

import { CItem } from './CItem';

export const CGroup = ({ data }: { data: IGroupSidebar }) => {
  //#region Data
  const theme = useTheme();

  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  //#region Event
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  //#endregion

  //#region Render
  return (
    <Stack px={2}>
      <Typography
        fontSize="0.75rem"
        fontFamily="var(--font-public-sans)"
        fontWeight={700}
        textTransform="uppercase"
        color={theme.palette.sidebar_group.main}
        mb={0.5}
        padding="16px 8px 8px 12px"
        onClick={onToggle}
        sx={{
          transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
          cursor: 'pointer',
          '&:hover': { color: theme.palette.sidebar_group_hover.main },
        }}
      >
        {data.label}
      </Typography>
      <Collapse in={open}>
        <Stack gap={0.5}>
          {data.children.map((child, index) => (
            <CItem key={child.id} data={child} />
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
  //#endregion
};

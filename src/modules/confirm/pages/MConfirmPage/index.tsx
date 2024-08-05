import { Box, Button, Stack } from '@mui/material';

import { confirm } from '@/funcs/confirm';

const MConfirmPage = () => {
  //#region Data
  //#endregion

  //#region Event
  const onClick = async () => {
    confirm({
      title: 'Delete User?',
      content: "Deleted user can't undo. Are you sure?",
      onProceed: () => console.log('You say yes'),
      onCancel: () => console.log('no no no!'),
    });
  };
  //#endregion

  //#region Render
  return (
    <Stack>
      <Box>
        <Button variant="contained" onClick={onClick}>
          Check confirm
        </Button>
      </Box>
    </Stack>
  );
  //#endregion
};
export default MConfirmPage;

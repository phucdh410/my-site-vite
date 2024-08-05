import { confirmable } from 'react-confirm';
import Lottie from 'react-lottie';

import { Divider, Stack, Typography } from '@mui/material';

import acceptAnim from '@/assets/lotties/accept-button.json';
import cancelAnim from '@/assets/lotties/cancel-button.json';
import warningAnim from '@/assets/lotties/warning.json';

import { ActionButton, ConfirmDialog } from './StyledComponents';
import { ICConfirmProps } from './types';
export const CConfirm = confirmable<ICConfirmProps, any>(
  ({ show, proceed, title, content, onProceed, onCancel, ...props }) => {
    //#region Data

    //#endregion

    //#region Event
    const onClose = () => {
      onCancel?.();
      proceed(false);
    };

    const onOk = async () => {
      onProceed?.();
      proceed(true);
    };
    //#endregion

    //#region Render
    return (
      <ConfirmDialog open={show} onClose={onClose}>
        <Stack>
          <Stack alignItems="center" gap={1} p={2}>
            <Lottie
              style={{ marginTop: '-16px', marginBottom: '-20px' }}
              height={120}
              width={120}
              options={{
                animationData: warningAnim,
                autoplay: true,
                loop: false,
              }}
            />
            <Typography fontSize={24} letterSpacing={0.6} fontWeight={600}>
              {title}
            </Typography>
            {content && <Typography fontWeight={500}>{content}</Typography>}
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="center">
            <ActionButton
              startIcon={
                <Lottie
                  height={95}
                  width={95}
                  style={{ margin: '-25px' }}
                  options={{ animationData: cancelAnim, loop: false }}
                />
              }
              role="cancel"
              onClick={onClose}
            >
              Hủy
            </ActionButton>
            <Divider orientation="vertical" flexItem />
            <ActionButton
              startIcon={
                <Lottie
                  height={50}
                  width={50}
                  options={{ animationData: acceptAnim, loop: false }}
                />
              }
              role="ok"
              onClick={onOk}
            >
              OK
            </ActionButton>
          </Stack>
        </Stack>
      </ConfirmDialog>
    );
    //#endregion
  },
);

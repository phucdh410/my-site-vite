import { SnackbarProvider } from 'notistack';

import { CNotiError } from './CNotiError';
import { CNotiSuccess } from './CNotiSuccess';

export const CNotiProvider = () => {
  return (
    <SnackbarProvider
      autoHideDuration={4000}
      Components={{
        success: CNotiSuccess,
        error: CNotiError,
      }}
    />
  );
};

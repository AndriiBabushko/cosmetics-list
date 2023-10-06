import React, { FC, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { IError } from '../../models/IError';

type Props = {
  error: IError;
};

export const ErrorPopup: FC<Props> = ({ error }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(true);

  const handleClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Snackbar open={isSnackbarOpen} onClose={handleClose} autoHideDuration={6000}>
      <Alert
        onClose={handleClose}
        severity={error.status === 400 ? 'warning' : error.status === 404 ? 'error' : 'success'}
        className={'w-full'}
      >
        {error.error}
      </Alert>
    </Snackbar>
  );
};

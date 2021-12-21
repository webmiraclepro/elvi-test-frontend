import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from 'redux/actions';

export default function Notifier() {
  const dispatch = useDispatch();
  const { message, errors, error, type } = useSelector(state => state.aux.alert);
  const content = React.useMemo(() => {
    if (!errors) {
      return null;
    } else if (error) {
      return error;
    }

    return Object.keys(errors).reduce((acc, key) => [
      ...acc,
      <p key={key}>{`${key}: ${errors[key]}`}</p>
    ], []);
  }, [errors, error]);


  const handleClose = (event, reason) => {
    dispatch(setAlert({}));
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={type || 'error'}
        onClose={handleClose}
      >
        <AlertTitle>{message}</AlertTitle>
        {content}
      </Alert>
    </Snackbar>
  );
}

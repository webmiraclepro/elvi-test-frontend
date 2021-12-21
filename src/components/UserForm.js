import PropTypes from 'prop-types';
import { Button, Grid, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FORM_MODES } from 'utils/constants';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
  username: yup.string().required('username is a required field'),
  email: yup.string().email('this field should be email format').required('email is a required field'),
  phone: yup.string(),
  identity: yup.string(),
  passport_number: yup.string(),
  birth_date: yup.string(),
});

const UserForm = ({ defaultValues, onSumbit, onDelete, mode = FORM_MODES.view }) => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      identity: '',
      passport_number: '',
      birth_date: '',
      ...defaultValues,
    },
  });

  const handleBack = (e) => {
    navigate('/');
  };

  const handleEdit = (e) => {
    navigate(`/edit/${defaultValues.id}`);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSumbit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{ readOnly: mode === FORM_MODES.view }}
                error={!!errors.username}
                label="Username"
                helperText={errors.username?.message}
                variant="standard"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{ readOnly: mode === FORM_MODES.view }}
                error={!!errors.email}
                label="Email"
                helperText={errors.email?.message}
                variant="standard"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{ readOnly: mode === FORM_MODES.view }}
                error={!!errors.phone}
                label="Phone"
                helperText={errors.phone?.message}
                variant="standard"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="identity"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{ readOnly: mode === FORM_MODES.view }}
                error={!!errors.identity}
                label="Identity"
                helperText={errors.identity?.message}
                variant="standard"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="passport_number"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{ readOnly: mode === FORM_MODES.view }}
                error={!!errors.passport_number}
                label="Passport Number"
                helperText={errors.passport_number?.message}
                variant="standard"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item container xs={12} spacing={4} justifyContent="flex-end">
          <Grid item>
            <Button variant='text' color='secondary' onClick={handleBack}>
              Back
            </Button>
          </Grid>
          <Grid item>
            {mode === FORM_MODES.view ? (
              <Button variant='contained' onClick={handleEdit}>
                Edit
              </Button>
            ) : (
              <Button variant='contained' type="sumbit">
                Sumbit
              </Button>
            )}
          </Grid>
          {mode === FORM_MODES.update && (
            <Grid item>
              <Button variant='contained' color='secondary' onClick={onDelete}>
                Delete
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </form>
  )
};

UserForm.props = {
  defaultValues: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default UserForm;
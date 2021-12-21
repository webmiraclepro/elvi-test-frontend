import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUsers, updateUser } from "redux/actions";
import { useNavigate, useParams } from "react-router";
import { UserForm } from "components";
import { Card, CardContent, CardHeader } from "@mui/material";
import { FORM_MODES } from "utils/constants";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const userData = useSelector(state => state.main.users.find(u => u.id === parseInt(userId)));
  const [deleteDlgOpen, setDeleteDlgOpen] = useState(false);

  const handleSubmit = async (data) => {
    try {
      await dispatch(updateUser(userId, data));
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteDlgClose = () => {
    setDeleteDlgOpen(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteUser(userId));
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  // eslint-disable-next-line
  useEffect(() => dispatch(readUsers()), []);

  return (
    <Card elevation={5}>
      <CardHeader title="Update User" />
      <CardContent>
        {userData && (
          <UserForm
            defaultValues={userData}
            mode={FORM_MODES.update}
            onSumbit={handleSubmit}
            onDelete={() => setDeleteDlgOpen(true)}
          />
        )}
        <Dialog
          open={deleteDlgOpen}
          onClose={handleDeleteDlgClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Delete User
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Deleted user cannot be recoverd again.
              Do you really want to delete this user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteDlgClose}>Cancel</Button>
            <Button onClick={handleDelete} autoFocus color="error" variant="contained">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default UserEdit;
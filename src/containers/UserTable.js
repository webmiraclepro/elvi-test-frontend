import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "redux/actions";
import { DataTable } from "components";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const columns = [
  {
    id: 'username',
    numeric: false,
    label: 'Username',
  },
  {
    id: 'birth_date',
    numeric: false,
    label: 'Birth Date',
  },
  {
    id: 'email',
    numeric: false,
    label: 'Email',
  },
  {
    id: 'phone',
    numeric: false,
    label: 'Phone',
  },
  {
    id: 'identity',
    numeric: false,
    label: 'Identity',
  },
  {
    id: 'passport_number',
    numeric: false,
    label: 'Passport Number',
  },
];

const UserTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector(state => state.main);

  const handleRowSelect = (userId) => {
    navigate(`/view/${userId}`);
  };

  const handleAddUser = (e) => {
    navigate('/add');
  };
  
  // eslint-disable-next-line
  useEffect(() => dispatch(readUsers()), []);

  return (
    <Card elevation={5}>
      <CardHeader title="User List" />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <DataTable
              rows={users}
              columns={columns}
              onRowSelect={handleRowSelect}
            />
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddUser}>
              Add User
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserTable;
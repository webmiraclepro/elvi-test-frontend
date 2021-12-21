import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "redux/actions";
import { useParams } from "react-router";
import { UserForm } from "components";
import { Card, CardContent, CardHeader } from "@mui/material";

const UserView = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userData = useSelector(state => state.main.users.find(u => u.id === parseInt(userId)));

  // eslint-disable-next-line
  useEffect(() => dispatch(readUsers()), []);

  return (
    <Card elevation={5}>
      <CardHeader title="User Detail View" />
      <CardContent>
        {userData && <UserForm defaultValues={userData} />}
      </CardContent>
    </Card>
  );
};

export default UserView;
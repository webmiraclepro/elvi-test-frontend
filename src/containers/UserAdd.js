import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createUser } from "redux/actions";
import { UserForm } from "components";
import { Card, CardContent, CardHeader } from "@mui/material";
import { FORM_MODES } from "utils/constants";

const UserAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await dispatch(createUser(data));
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card elevation={5}>
      <CardHeader title="Add User" />
      <CardContent>
        <UserForm mode={FORM_MODES.create} onSumbit={handleSubmit} />
      </CardContent>
    </Card>
  );
};

export default UserAdd;
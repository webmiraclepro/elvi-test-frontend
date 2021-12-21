import * as userApi from "api/userApi";
import { createAction } from "redux-actions";
import * as ActionTypes from "utils/actionTypes";
import { setAlert } from ".";

export const setUsers = createAction(ActionTypes.SET_USERS, payload => payload);
export const insertUser = createAction(ActionTypes.INSERT_USER, payload => payload);
export const removeUser = createAction(ActionTypes.REMOVE_USER, payload => payload);
export const modifyUser = createAction(ActionTypes.MODIFY_USER, payload => payload);

export const readUsers = () => async (dispatch) => {
  try {
    const users = await userApi.readUsers();
    dispatch(setUsers(users));
  } catch (e) {
    dispatch(setAlert(e.response.data));
  }
};

export const createUser = (params) => async (dispatch) => {
  try {
    const data = await userApi.createUser(params);
    dispatch(insertUser(data.user));
    dispatch(setAlert({ type: 'info', message: 'Successfully created user' }));
  } catch (e) {
    dispatch(setAlert(e.response.data));
    throw new Error('createUser failed');
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await userApi.deleteUser(userId);
    dispatch(removeUser(userId));
    dispatch(setAlert({ type: 'info', message: 'Successfully deleted user' }));
  } catch (e) {
    dispatch(setAlert(e.response.data));
    throw new Error('deleteUser failed');
  }
};

export const updateUser = (id, params) => async (dispatch) => {
  try {
    const data = await userApi.updateUser(id, params);
    dispatch(modifyUser(data));
    dispatch(setAlert({ type: 'info', message: 'Successfully updated user' }));
  } catch (e) {
    dispatch(setAlert(e.response.data));
    throw new Error('updateUser failed');
  }
}
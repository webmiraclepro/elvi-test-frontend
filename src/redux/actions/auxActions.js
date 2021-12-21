import { createAction } from "redux-actions";
import * as ActionTypes from "utils/actionTypes";

export const setAlert = createAction(ActionTypes.SET_ALERT, payload => payload);
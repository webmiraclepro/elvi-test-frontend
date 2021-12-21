import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/actionTypes';
import * as auxStateUpdaters from './auxStateUpdaters';

const actionHandler = {
  [ActionTypes.SET_ALERT]: auxStateUpdaters.setAlertUpdater,
};

export default handleActions(actionHandler, auxStateUpdaters.INIT_MAIN_STATE);

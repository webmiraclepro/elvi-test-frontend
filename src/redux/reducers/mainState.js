import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/actionTypes';
import * as mainStateUpdaters from './mainStateUpdaters';

const actionHandler = {
  [ActionTypes.SET_USERS]: mainStateUpdaters.setUsersUpdater,
  [ActionTypes.INSERT_USER]: mainStateUpdaters.insertUserUpdater,
  [ActionTypes.REMOVE_USER]: mainStateUpdaters.removeUserUpdater,
  [ActionTypes.MODIFY_USER]: mainStateUpdaters.modifyUserUpdater,
};

export default handleActions(actionHandler, mainStateUpdaters.INIT_MAIN_STATE);

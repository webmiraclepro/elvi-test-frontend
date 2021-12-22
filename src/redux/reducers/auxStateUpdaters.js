export const INIT_AUX_STATE = Object.freeze({
  alert: {
    type: null,
    message: null,
    errors: null,
    error: null,
  },
});

export const setAlertUpdater = (state, { payload }) => ({
  ...state,
  alert: payload,
});

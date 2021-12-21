export const INIT_MAIN_STATE = Object.freeze({
  users: [],
  selectedUserId: null,
});

export const setUsersUpdater = (state, { payload }) => ({
  ...state,
  users: payload,
});

export const insertUserUpdater = (state, { payload }) => ({
  ...state,
  users: [...state.users, payload],
});

export const removeUserUpdater = (state, { payload: userId }) => ({
  ...state,
  users: state.users.filter(u => u.id !== userId),
});

export const modifyUserUpdater = (state, { payload }) => ({
  ...state,
  users: state.users.map(u => u.id === payload.id ? payload : u),
});

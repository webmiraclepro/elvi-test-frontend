import axios from './axios';

export const readUsers = async () => {
  return await axios.get('users');
};

export const createUser = async (params) => {
  return await axios.post('users', params);
};

export const updateUser = async (id, params) => {
  return await axios.put(`users/${id}`, params);
};

export const deleteUser = async (userId) => {
  return await axios.delete(`users/${userId}`);
};

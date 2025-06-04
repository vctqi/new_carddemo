import api from './api';

const USERS_ENDPOINT = '/users';

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await api.get(USERS_ENDPOINT);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to fetch users' };
  }
};

// Get user by ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to fetch user' };
  }
};

// Get user by username
export const getUserByUsername = async (username) => {
  try {
    const response = await api.get(`${USERS_ENDPOINT}/username/${username}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to fetch user' };
  }
};

// Create new user
export const createUser = async (userData) => {
  try {
    const response = await api.post(USERS_ENDPOINT, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to create user' };
  }
};

// Update user
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`${USERS_ENDPOINT}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to update user' };
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    await api.delete(`${USERS_ENDPOINT}/${id}`);
    return true;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to delete user' };
  }
};
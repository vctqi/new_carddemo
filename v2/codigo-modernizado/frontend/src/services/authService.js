import api from './api';
import { setToken, setUserInfo, clearUserSession } from '../utils/auth';

const AUTH_ENDPOINT = '/auth';

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post(`${AUTH_ENDPOINT}/login`, credentials);
    const { accessToken, username, roles } = response.data;
    
    // Save token and user info
    setToken(accessToken);
    setUserInfo({ username, roles });
    
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Authentication failed' };
  }
};

// Logout user
export const logout = () => {
  clearUserSession();
};
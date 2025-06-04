import { jwtDecode } from 'jwt-decode';

// Local storage keys
const TOKEN_KEY = 'auth_token';
const USER_INFO = 'user_info';

// Save token to local storage
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Get token from local storage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove token from local storage
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Save user info to local storage
export const setUserInfo = (userInfo) => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
};

// Get user info from local storage
export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo ? JSON.parse(userInfo) : null;
};

// Remove user info from local storage
export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    
    // Check if token is expired
    if (decoded.exp < currentTime) {
      clearUserSession();
      return false;
    }
    
    return true;
  } catch (error) {
    clearUserSession();
    return false;
  }
};

// Check if user has a specific role
export const hasRole = (role) => {
  const userInfo = getUserInfo();
  if (!userInfo || !userInfo.roles) return false;
  
  return userInfo.roles.includes(role);
};

// Clear user session (token and user info)
export const clearUserSession = () => {
  removeToken();
  removeUserInfo();
};
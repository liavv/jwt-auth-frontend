import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register user
export const register = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, { username, password });
  return response.data;
};

// Login user
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

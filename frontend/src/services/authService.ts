import axios from 'axios';

const API_BASE = 'http://localhost:3000/auth';

const login = async (data: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE}/login`, data);
  return response.data; // { access_token: '...' }
};

const register = async (data: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE}/register`, data);
  return response.data;
};

export default {
  login,
  register,
};

// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signIn = async (credentials) => {
  try {
    const response = await api.post('/api/auth/signin', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default api;

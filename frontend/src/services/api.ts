import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API request functions:

export const fetchAboutUs = async () => {
  const response = await api.get('/about-us');
  return response.data;
};

export const fetchCareers = async () => {
  const response = await api.get('/careers');
  return response.data;
};

export const fetchIndustries = async () => {
  const response = await api.get('/industries');
  return response.data;
};

export const fetchInsights = async () => {
  const response = await api.get('/insights');
  return response.data;
};

export const fetchServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export default api;

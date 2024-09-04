import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const registerUser = (userData) => API.post('auth/register/', userData);
export const loginUser = (userData) => API.post('auth/login/', userData); // Updated endpoint
export const fetchUserProfile = (token) =>
  API.get('auth/profile/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const fetchDashboardData = (token) =>
  API.get('dashboard/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  //Function to fetch all users
  
export const fetchUsers = (token) =>
  API.get('users/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default API;

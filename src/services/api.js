// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// export const register = async (username, email, password) => {
//   const res = await axios.post(`${API_URL}/users/register`, { username, email, password });
//   return res.data;
// };

// export const login = async (email, password) => {
//   const res = await axios.post(`${API_URL}/users/login`, { email, password });
//   return res.data;
// };

// export const getTasks = async (token) => {
//   const res = await axios.get(`${API_URL}/tasks`, {
//     headers: { 'x-auth-token': token }
//   });
//   return res.data;
// };

// export const createTask = async (title, token) => {
//   const res = await axios.post(`${API_URL}/tasks`, { title }, {
//     headers: { 'x-auth-token': token }
//   });
//   return res.data;
// };

// export const deleteTask = async (id, token) => {
//   await axios.delete(`${API_URL}/tasks/${id}`, {
//     headers: { 'x-auth-token': token }
//   });
// };

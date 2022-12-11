import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(userInfo) {
  const response = await axios.post('users/signup', userInfo);
  return response.data;
}

export async function logInUser(userInfo) {
  const response = await axios.post('users/login', userInfo);
  return response.data;
}

export async function logOutUser() {
  const response = await axios.post('users/logout');
  return response.data;
}

export async function getUser() {
  const response = await axios.get('users/current');
  return response.data;
}

export async function getContacts() {
  const response = await axios.get('contacts');
  return response;
}

export async function addContacts(info) {
  const response = await axios.post('contacts', info);
  return response.data;
}

export async function deleteContacts(contactId) {
  const response = await axios.delete(`contacts/${contactId}`);
  return response.data;
}

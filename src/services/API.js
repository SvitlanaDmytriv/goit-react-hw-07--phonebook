import axios from 'axios';

axios.defaults.baseURL = 'https://6192750f57b14a0017c4a0d4.mockapi.io';

export const fetchContacts = () => {
  return axios.get('/Contacts');
};

export const addContacts = ({ name, phone }) => {
  return axios.post('/Contacts', { name, phone });
};

export const deleteContacts = id => {
  return axios.delete(`/Contacts/${id}`);
};

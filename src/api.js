import axios from 'axios';

const request = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await request.get('/contacts');
  return data;
};

export const addContact = async options => {
  const { data } = await request.post('/contacts', options);
  return data;
};

export const removeContact = async id => {
  const { data } = await request.delete(`/contacts/${id}`);
  return data;
};

const setToken = token => {
  if (token) {
    return (request.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  request.defaults.headers.common.authorization = '';
};

export const getSignUp = async data => {
  const { data: result } = await request.post('/users/signup', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export const getLogIn = async data => {
  const { data: result } = await request.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getLogOut = async () => {
  const { data } = await request.post('/users/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await request.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

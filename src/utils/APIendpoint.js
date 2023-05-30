import axios from 'axios';

axios.defaults.baseURL = 'https://644ac87079279846dcf1c85b.mockapi.io/';

export const fetchContactsAxios = async () => {
    const response = await axios.get('/contacts');
    console.log('response', response);
    return response.data;
  };


export const addContactAxios = async (values) => {
    const response = await axios.post('/contacts', values);
    return response.data;
};

export const deleteContactAxios = async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
};
   
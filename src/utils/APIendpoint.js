import axios from 'axios';

axios.defaults.baseURL = 'https://644ac87079279846dcf1c85b.mockapi.io';

export const fetchContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export const addContact = async (values) => {
  try {
    const response = await axios.post('/contacts', values);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
   
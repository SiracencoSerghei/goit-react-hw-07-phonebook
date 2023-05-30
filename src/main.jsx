import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import App from './components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import { fetchContactsAxios, addContactAxios, deleteContactAxios } from './utils/APIendpoint';

// const test = async () => {
//   const value2 = await addContactAxios({ name: 'serghei', phone: 12345678 });
//   console.log('value2', value2);

//   // const value1 = await fetchContacts();
//   // console.log('value1', value1);

//   // const value3 = await deleteContact(22);
//   // console.log('value3', value3);
// };

// test();
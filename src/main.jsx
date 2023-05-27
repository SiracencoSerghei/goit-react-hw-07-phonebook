import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';
import App from './components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


// import { fetchContacts, addContact, deleteContact } from './utils/APIendpoint';

// const test = async () => {
//   // const value2 = await addContact({ id: 1, name: 'serghei', phone: 12345678 });
//   // console.log('value2', value2);

//   const value1 = await fetchContacts();
//   console.log('value1', value1);

//   const value3 = await deleteContact(22);
//   console.log('value3', value3);
// };

// test();
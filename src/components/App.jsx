import React, { useEffect } from 'react';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import './App.css';
import  { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../redux/operations';


export default function App() {
  
  return (
    <>
      <Toaster />
      <div className="Container">
        <section title="Phonebook" className="Section">
          <h1>Phonebook</h1>
          <ContactForm />
        </section>
        <section title="Contacts" className="Section">
          <h2>Filter</h2>
          <Filter />
          <h2>Contacts</h2>
          <ContactList />
        </section>

      </div>
    </>
  );
}

import React from 'react';
import ContactListItem from './ContactItem';
import { useSelector } from 'react-redux';
import './ContactList.css';

const ContactList = () => {

  return (
      <ul className="ContactsList">
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
  );
};

export default ContactList;
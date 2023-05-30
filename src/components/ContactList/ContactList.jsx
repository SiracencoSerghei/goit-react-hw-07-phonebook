import React, { useEffect } from 'react';
import ContactListItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/selectors';
import { useFetchContacts } from '../../utils/hooks';
import './ContactList.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log('contactsList', contacts);
  const isLoading = useSelector(selectIsLoading);
  const filterChoice = useSelector(selectFilter);
  const dispatch = useDispatch();
  console.log('isLoading', isLoading);
  console.log('filtered', filterChoice);

  useFetchContacts(dispatch);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterChoice)
  );

  return (
    <ul className="ContactsList">
      {filteredContacts?.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

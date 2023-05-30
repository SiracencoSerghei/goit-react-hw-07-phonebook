import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import './ContactList.css';

const ContactListItem = (contact) => {
    const dispatch = useDispatch();

    return (
        <li className="ContactListItem">
            <p>{contact.contact.name}: {contact.contact.phone}</p>
            <button type="button" className="ContactsList-button" onClick={() => dispatch(deleteContact(contact.contact.id))}>
          <FaTrashAlt />
            </button>
        </li>
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default ContactListItem;
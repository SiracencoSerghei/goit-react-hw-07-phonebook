import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import './ContactList.css';

const ContactListItem = ({contact}) => {
    const dispatch = useDispatch();

    const onClickRemove = e => {

    };
    return (
        <li className="ContactListItem">
            <p>{contact.name}: {contact.number}</p>
            <button type="button" className="ContactsList-button" onClick={onClickRemove}>
          <FaTrashAlt />
            </button>
        </li>
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default ContactListItem;
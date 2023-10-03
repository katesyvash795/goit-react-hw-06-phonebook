import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, ListItem, DeleteButton } from './ContactsList.styled';
function ContactList() {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <div>
            <b>{contact.name}:</b> {contact.number}
          </div>
          <DeleteButton onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;

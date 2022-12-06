import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/sliceContacts';
import {
  ContactsListStyled,
  ListItem,
} from 'components/ContactsList/ContactsList.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ContactsListStyled>
      {filterContacts().map(({ name, number, id }) => (
        <ListItem key={id}>
          {name} {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ContactsListStyled>
  );
};

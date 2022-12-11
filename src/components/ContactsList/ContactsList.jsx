import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts_operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Button } from 'components/ContactsForm/ContactsForm.styled';
import {
  ContactsListStyled,
  ListItem,
  ListLink,
  ListLinkWrap,
} from 'components/ContactsList/ContactsList.styled';
import { BsTelephoneForwardFill } from 'react-icons/bs';
export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ContactsListStyled>
      {filterContacts().map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}
          <ListLinkWrap>
            <ListLink href={`tel:${number.replace(/\D/, '')}`}>
              <BsTelephoneForwardFill size={18} style={{ marginRight: '10' }} />
              {number}
            </ListLink>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListLinkWrap>
        </ListItem>
      ))}
    </ContactsListStyled>
  );
};

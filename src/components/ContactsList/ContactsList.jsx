import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts_operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Button } from 'components/ContactsForm/ContactsForm.styled';
import {
  ContactName,
  ContactsListStyled,
  ListItem,
  ListLink,
  ListLinkWrap,
} from 'components/ContactsList/ContactsList.styled';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { SlPencil } from 'react-icons/sl';
import { ImBin } from 'react-icons/im';
import { ModalWindow } from 'components/Modal/Modal';
import { ChangeContactForm } from 'components/ChangeContactForm/ChangeContactForm';

export const ContactsList = () => {
  const [chosenId, setChosenId] = useState(null);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showContactNumber, setShowContactNumber] = useState(false);
  const toggleContactNumber = () =>
    setShowContactNumber(showContactNumber !== true);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const clickedEditContact = id => {
    setChosenId(id);
    handleShow();
  };
  const clickedName = id => {
    setChosenId(id);
    toggleContactNumber();
  };

  return (
    <ContactsListStyled>
      {filter && (
        <span className="name">Found {filterContacts().length} contacts</span>
      )}
      {filterContacts().map(({ name, number, id }) => (
        <ListItem key={id}>
          <div>
            <ContactName onClick={() => clickedName(id)}>{name}</ContactName>
            {showContactNumber && chosenId === id && (
              <ListLink href={`tel:${number.replace(/\D/, '')}`}>
                <BsTelephoneForwardFill
                  size={18}
                  style={{ marginRight: '10' }}
                />
                {number}
              </ListLink>
            )}
          </div>
          <ListLinkWrap
            className="
          d-flex
          align-items-center
          justify-content-center
          gap-2"
          >
            <Button type="button" onClick={() => clickedEditContact(id)}>
              <SlPencil />
            </Button>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              <ImBin />
            </Button>
          </ListLinkWrap>
        </ListItem>
      ))}
      <ModalWindow show={show} handleClose={handleClose} title="Change contact">
        <ChangeContactForm chosenId={chosenId} handleClose={handleClose} />
      </ModalWindow>
    </ContactsListStyled>
  );
};

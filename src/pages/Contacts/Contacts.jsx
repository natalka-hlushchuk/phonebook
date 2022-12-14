import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { SlMagnifier, SlUserFollow } from 'react-icons/sl';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import {
  ContactsForm,
  ContactsList,
  Loader,
  Filter,
  Button,
  ModalWindow,
} from 'components/index';
import { Title, TitleCont } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(showFilter !== true);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Container>
      <Title>Phonebook</Title>
      <div className="d-flex justify-content-between mb-2">
        <TitleCont>You have {contacts.length} contacts</TitleCont>
        <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
          <Button onClick={handleShow}>
            <SlUserFollow />
          </Button>
          <Button
            onClick={() => {
              toggleFilter();
            }}
          >
            <SlMagnifier />
          </Button>
        </div>
      </div>
      <ModalWindow show={show} handleClose={handleClose} title="Add contact">
        <ContactsForm handleClose={handleClose} />
      </ModalWindow>
      {isLoading && !error && <Loader />}
      {showFilter && <Filter />}
      <ContactsList />
    </Container>
  );
};
export default Contacts;

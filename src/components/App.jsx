import React, { useState, useEffect } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Box, Title, TitleCont } from 'components/Box/Box.styled.js';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContactInfo = contactObj => {
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === contactObj.name.toLowerCase()
      )
    ) {
      return alert(`${contactObj.name} is already in contacts`);
    }
    setContacts(() => {
      return [contactObj, ...contacts];
    });
  };

  const onAddFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDelete = contactId => {
    setContacts(contacts.filter(cont => cont.id !== contactId));
  };

  return (
    <Box
      as="section"
      m="auto"
      bg="white"
      borderRadius="8px"
      width="450px"
      p="30px"
      mt="30px"
    >
      <Box pb="40px">
        <Title>Phonebook</Title>
        <ContactsForm onAddContactInfo={onAddContactInfo} />
      </Box>
      <Box>
        <TitleCont>Contacts</TitleCont>
        <Filter onAddFilter={onAddFilter} filter={filter} />
        <ContactsList contactsList={filterContacts()} onDelete={onDelete} />
      </Box>
    </Box>
  );
};

export default App;

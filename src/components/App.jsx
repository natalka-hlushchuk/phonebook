import React from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Box, Title, TitleCont } from 'components/Box/Box.styled.js';

const App = () => {
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
        <ContactsForm />
      </Box>
      <Box>
        <TitleCont>Contacts</TitleCont>
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};

export default App;

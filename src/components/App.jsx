import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/loader';
import Filter from 'components/Filter/Filter';
import { Box, Title, TitleCont } from 'components/Box/Box.styled.js';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
        {isLoading && !error && <Loader />}
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};

export default App;

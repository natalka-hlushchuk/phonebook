import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box/Box.styled';
import { Title } from './Register.styled';

const Register = () => {
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
      <Title>Register Form</Title>
      <RegisterForm></RegisterForm>
    </Box>
  );
};
export default Register;

//    <Box pb="40px">
//      <Title>Phonebook</Title>
//      <ContactsForm />
//    </Box>
//    <Box>
//      <TitleCont>Contacts</TitleCont>
//      {isLoading && !error && <Loader />}
//      <Filter />
//      <ContactsList />
//    </Box>
// ;

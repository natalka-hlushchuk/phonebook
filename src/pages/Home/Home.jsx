import React from 'react';
import { HomeDescription, HomeStyled, HomeTitle } from 'pages/Home/Home.styled';
import { Box } from 'components/Box/Box.styled';

const Home = () => {
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
      <HomeStyled>
        <HomeTitle>Contacts app</HomeTitle>
        <HomeDescription>
          Lightweight, intelligent contact management application. This smart
          contact book with phone numbers will help you keep your contacts in
          one place. Here you can add or remove a contact. And also make a call
          directly from the contact list. Your contacts are under reliable
          protection, as user authentication is present. To use the application
          you need to register.
        </HomeDescription>
      </HomeStyled>
    </Box>
  );
};
export default Home;

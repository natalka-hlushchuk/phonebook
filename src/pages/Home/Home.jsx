import React from 'react';
import { HomeDescription, HomeStyled, HomeTitle } from 'pages/Home/Home.styled';

import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* <HomeStyled> */}
      <HomeTitle>Contacts app</HomeTitle>
      <HomeDescription>
        Lightweight, intelligent contact management application. This smart
        contact book with phone numbers will help you keep your contacts in one
        place. Here you can add or remove a contact. And also make a call
        directly from the contact list. Your contacts are under reliable
        protection, as user authentication is present. To use the application
        you need to register.
      </HomeDescription>
      {/* </HomeStyled> */}
    </Container>
  );
};
export default Home;

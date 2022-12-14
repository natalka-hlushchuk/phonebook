import React from 'react';
import { Container } from 'react-bootstrap';
import { HomeDescription, HomeTitle } from 'pages/Home/Home.styled';

const Home = () => {
  return (
    <Container>
      <HomeTitle>Contacts app</HomeTitle>
      <HomeDescription>
        Lightweight, intelligent contact management application. This smart
        contact book with phone numbers will help you keep your contacts in one
        place. Here you can add or remove a contact. And also make a call
        directly from the contact list. Your contacts are under reliable
        protection, as user authentication is present. To use the application
        you need to register.
      </HomeDescription>
    </Container>
  );
};
export default Home;

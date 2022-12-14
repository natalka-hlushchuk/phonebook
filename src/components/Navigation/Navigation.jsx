import React from 'react';
import { useSelector } from 'react-redux';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';
import { Nav } from 'react-bootstrap';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Nav className="mr-auto gap-3 align-items-center">
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}
    </Nav>
  );
};

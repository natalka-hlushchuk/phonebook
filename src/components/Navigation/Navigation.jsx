import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Nav } from 'react-bootstrap';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav className="mr-auto gap-3 align-items-center">
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}
    </Nav>
  );
};

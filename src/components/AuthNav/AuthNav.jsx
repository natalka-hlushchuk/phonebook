import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';



export const AuthNav = () => {
  return (
    <>
      <Nav className="mr-auto gap-3 align-items-center">
        <NavLinkStyled to="register">Register</NavLinkStyled>
        <NavLinkStyled to="login">Login</NavLinkStyled>
      </Nav>
    </>
  );
};

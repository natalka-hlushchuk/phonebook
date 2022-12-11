import React from 'react';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="register">Register</NavLinkStyled>
      <NavLinkStyled to="login">Login</NavLinkStyled>
    </div>
  );
};

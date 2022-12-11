import React from 'react';
import {
  AuthNavStyled,
  NavLinkStyled,
} from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLinkStyled to="register">Register</NavLinkStyled>
      <NavLinkStyled to="login">Login</NavLinkStyled>
    </AuthNavStyled>
  );
};

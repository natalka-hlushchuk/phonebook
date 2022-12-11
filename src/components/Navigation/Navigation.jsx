import React from 'react';
import {
  NavStyled,
  NavLinkStyled,
} from 'components/Navigation/Navigation.styled';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};

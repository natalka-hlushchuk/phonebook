import React from 'react';
import { useSelector } from 'react-redux';
import {
  NavStyled,
  NavLinkStyled,
} from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};

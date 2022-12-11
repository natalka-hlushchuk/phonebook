import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img/avatar.png';
import { logOut } from 'redux/auth/auth_operations';
import { UserMenuStyled, UserText } from './UserMenu.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <UserMenuStyled>
      <img src={icon} width="42" alt={name} />
      <UserText>Welcome, {name} </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserMenuStyled>
  );
};

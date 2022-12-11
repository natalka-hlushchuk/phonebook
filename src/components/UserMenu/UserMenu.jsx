import React from 'react';
import { UserMenuStyled, UserText } from './UserMenu.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img/avatar.png';
import { logOut } from 'redux/auth/auth_operations';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  console.log(name);
  const dispatch = useDispatch();
  console.log(name);
  return (
    <UserMenuStyled>
      <img src={icon} width="62" alt="" />
      <UserText>Welcome, {name} </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserMenuStyled>
  );
};

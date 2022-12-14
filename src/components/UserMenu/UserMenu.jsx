import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img/kindpng.png';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { selectAuthName, selectIsLoggedIn } from 'redux/selectors';
import { logOut } from 'redux/auth/auth_operations';
import { Button } from 'components/index';
import { UserImg, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectAuthName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    if (isLoggedIn) navigate('/');
  };
  return (
    <Nav className="mr-auto gap-3 align-items-center">
      <UserImg src={icon} width="32" alt={name} />
      <UserText>Welcome, {name} </UserText>
      <Button type="button" onClick={onClick} fromHeader={true}>
        Log out
      </Button>
    </Nav>
  );
};

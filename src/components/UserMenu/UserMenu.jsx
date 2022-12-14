import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img/kindpng.png';
import { logOut } from 'redux/auth/auth_operations';
import { UserImg, UserText } from './UserMenu.styled';
import { Button } from 'components/Button/Button';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = evt => {
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
